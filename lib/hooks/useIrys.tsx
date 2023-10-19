import { Tag } from "@/lib/types/irys.types";
import { WebIrys } from "@irys/sdk";

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

      console.log("Uploading files...");
      const tx = await irys.uploadFolder(files);

      console.log(
        `Files uploaded. Manifest Id=${tx.manifestId} Receipt Id=${tx.id}`
      );

      return tx.id;
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
      const tx = await irys.upload(data, {
        tags,
      });

      console.log(`Data uploaded ==> https://gateway.irys.xyz/${tx.id}`);

      return tx.id;
    } catch (error) {
      console.log("Error uploading data ", error);
    }
  };

  return {
    gaslessFundAndUploadFiles,
    gaslessFundAndUploadData,
  };
}

export default useIrys;
