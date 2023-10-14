import Irys from "@irys/sdk";

function useIrys() {
  const getIrys = async () => {
    const url = "https://devnet.irys.xyz";
    const token = "solana";
    const providerUrl = "https://api.devnet.solana.com";

    const irys = new Irys({
      url, // URL of the node you want to connect to
      token, // Token used for payment
      key: process.env.WALLET_PRIVATE_KEY, // SOL private key
      config: { providerUrl }, // Optional provider URL, only required when using Devnet
    });

    return irys;
  };

  const fundNode = async () => {
    const irys = await getIrys();
    try {
      const fundTx = await irys.fund(irys.utils.toAtomic(0.05));
      console.log(
        `Successfully funded ${irys.utils.fromAtomic(fundTx.quantity)} ${
          irys.token
        }`
      );
    } catch (e) {
      console.log("Error uploading data ", e);
    }
  };

  const uploadData = async () => {
    const irys = await getIrys();
    const dataToUpload = "GM world.";
    try {
      const receipt = await irys.upload(dataToUpload);
      console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
    } catch (e) {
      console.log("Error uploading data ", e);
    }
  };

  const uploadFile = async () => {
    const irys = await getIrys();
    // Your file
    const fileToUpload = "./myImage.png";

    const tags = [{ name: "application-id", value: "MyNFTDrop" }];

    try {
      const receipt = await irys.uploadFile(fileToUpload, { tags });
      console.log(`File uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
    } catch (e) {
      console.log("Error uploading file ", e);
    }
  };

  return {
    fundNode,
    uploadData,
    uploadFile,
  };
}

export default useIrys;
