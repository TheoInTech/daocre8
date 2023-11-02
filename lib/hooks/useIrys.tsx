import { Tag } from "@/lib/types/irys.types";
import { dateToHumanReadable } from "@/lib/utils/dateToHumanReadable";
import Query from "@irys/query";
import { WebIrys } from "@irys/sdk";
import crypto from "crypto";

function useIrys() {
  const getIrys = async () => {
    const url =
      process.env.NEXT_PUBLIC_IRYS_NODE_URL || "https://devnet.irys.xyz";
    const token = process.env.NEXT_PUBLIC_IRYS_TOKEN || "solana";
    const providerUrl =
      process.env.NEXT_PUBLIC_IRYS_PROVIDER_URL ||
      "https://api.devnet.solana.com";

    // Obtain the server's public key
    const pubKeyRes = (await (
      await fetch("/api/irys/publicKeySOL")
    ).json()) as unknown as {
      pubKey: string;
    };
    const pubKey = Buffer.from(pubKeyRes.pubKey, "hex");
    console.log("got pubKey=", pubKey);

    // Create a provider
    const provider = {
      publicKey: {
        toBuffer: () => pubKey,
        byteLength: 32,
      },
      signMessage: async (message: Uint8Array) => {
        let convertedMsg = Buffer.from(message).toString("hex");

        const res = await fetch("/api/irys/signDataSOL", {
          method: "POST",
          body: JSON.stringify({
            signatureData: convertedMsg,
          }),
        });
        const { signature } = await res.json();
        console.log("signature=", signature);

        const bSig = Buffer.from(signature, "hex");
        return bSig;
      },
    };

    // Create a new WebIrys object using the provider created with server info.
    const wallet = {
      rpcURL: providerUrl,
      name: token,
      provider: provider,
    };
    const irys = new WebIrys({ url, token: token, wallet });

    return irys;
  };

  const gaslessFundAndUploadFiles = async (files: File[]) => {
    const irys = await getIrys();

    try {
      await irys.ready();
      console.log("WebIrys=", irys);

      const numBytes = files.reduce((acc, file) => acc + file.size, 0);
      // Convert from atomic units to standard units
      const priceConverted = irys.utils.fromAtomic(numBytes);
      console.log(
        `You will be uploading ${numBytes} bytes costs ${priceConverted}`
      );

      console.log("Funding Irys...");
      const fundTx = await fetch("/api/irys/lazyFundSOL", {
        method: "POST",
        body: JSON.stringify({
          fileSize: numBytes,
        }),
      });
      console.log("Funding successful at:, ", fundTx);

      console.log("Uploading files...");
      const tx = await irys.uploadFolder(files);

      console.log(
        `Files uploaded. Manifest Id=${tx.manifestId} Receipt Id=${tx.id}`
      );

      return tx;
    } catch (error) {
      console.log("Error uploading file ", error);
    }
  };

  const gaslessFundAndUploadData = async (data: string, tags: Tag[]) => {
    const irys = await getIrys();

    try {
      await irys.ready();
      console.log("WebIrys=", irys);

      console.log("Uploading data...");

      // Generate the deterministic Tx id
      const anchor = crypto.randomBytes(16).toString("hex");
      console.log("anchor=", anchor);
      const tx = irys.createTransaction(data, {
        // TODO: Update the project id value into the Project DAO public key from PDA
        tags: [
          ...tags,
          { name: "content-type", value: "text/plain" },
          { name: "project-id", value: "DAOCre-8" },
          { name: "root-tx", value: anchor },
        ],
        anchor,
      });
      await tx.sign();

      console.log("tx id=", tx.id);
      const receipt = await tx.upload();

      console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);

      return receipt.id;
    } catch (error) {
      console.log("Error uploading data ", error);
    }
  };

  const gaslessFundAndUpdateData = async (
    data: string,
    tags: Tag[],
    rootTxId: string
  ) => {
    const irys = await getIrys();

    try {
      await irys.ready();
      console.log("WebIrys=", irys);

      console.log("Uploading data...");
      const tx = await irys.upload(data, {
        // TODO: Update the project id value into the Project DAO public key from PDA
        tags: [
          ...tags,
          { name: "project-id", value: "DAOCre-8" },
          { name: "root-tx", value: rootTxId },
        ],
      });

      console.log(`Data uploaded ==> https://gateway.irys.xyz/${tx.id}`);

      return tx.id;
    } catch (error) {
      console.log("Error uploading data ", error);
    }
  };

  // Query for all transactions tagged as having a root-tx matching ours
  // You could optionally expand on this by querying for the `owner` value
  // and making sure it matches the wallet address used to upload
  // the original transactions.
  const getProveanceChainSDK = async (rootTxId: string) => {
    const provenanceChainData = [];

    // Connect to a Query object
    const myQuery = new Query({
      url: `${process.env.NEXT_PUBLIC_IRYS_NODE_URL}/graphql`,
    });

    // First, get the root TX
    const rootTx = await myQuery.search("irys:transactions").ids([rootTxId]);

    // Extract the id and timestamp and download the data payload
    if (rootTx) {
      const unixTimestamp = rootTx[0].timestamp;
      const date = new Date(unixTimestamp);
      const humanReadable = dateToHumanReadable(date);

      const url = `${process.env.NEXT_PUBLIC_IRYS_NODE_URL}/${rootTx[0].id}`;
      const response = await fetch(url);
      const data = await response.text();

      const provenanceEntry = { Date: humanReadable, Data: data };
      provenanceChainData.push(provenanceEntry);
    }

    // Now, get the provenance chain
    const chain = await myQuery
      .search("irys:transactions")
      .tags([{ name: "root-tx", values: [rootTxId] }]);

    // Iterate over entries
    for (const item of chain) {
      const unixTimestamp = item.timestamp;
      const date = new Date(unixTimestamp);
      const humanReadable = dateToHumanReadable(date);

      const url = `${process.env.NEXT_PUBLIC_IRYS_NODE_URL}/${item.id}`;
      const response = await fetch(url);
      const data = await response.text();

      const provenanceEntry = { Date: humanReadable, Data: data };
      provenanceChainData.push(provenanceEntry);
    }
    return provenanceChainData;
  };

  return {
    gaslessFundAndUploadFiles,
    gaslessFundAndUploadData,
    gaslessFundAndUpdateData,
    getProveanceChainSDK,
  };
}

export default useIrys;
