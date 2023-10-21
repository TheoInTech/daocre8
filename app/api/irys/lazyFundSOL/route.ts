import Irys from "@irys/sdk";
import { NextResponse } from "next/server";

/**
 * Given a file of the specified size, get the cost to upload, then fund a node that amount
 * @param fileSize The size of a file to fund for
 * @returns
 */
async function lazyFund(fileSize: number): Promise<string> {
  console.log("lazyFund SOL");

  const key = process.env.WALLET_PRIVATE_KEY;
  const url =
    process.env.NEXT_PUBLIC_IRYS_NODE_URL || "https://devnet.irys.xyz";
  const token = process.env.NEXT_PUBLIC_IRYS_TOKEN || "solana";
  const providerUrl =
    process.env.NEXT_PUBLIC_IRYS_PROVIDER_URL ||
    "https://api.devnet.solana.com";

  const serverIrys = new Irys({
    url, // URL of the node you want to connect to
    token, // Token used for payment and signing
    key: key,
    config: { providerUrl }, // Optional provider URL, only required when using Devnet
  });

  const price = await serverIrys.getPrice(fileSize);
  console.log("lazyFund SOL price=", price);

  const balance = await serverIrys.getLoadedBalance();
  console.log("lazyFund SOL balance=", balance);

  let fundTx;
  if (price.isGreaterThanOrEqualTo(balance)) {
    console.log("Funding node.");
    fundTx = await serverIrys.fund(price);
    console.log("Successfully funded fundTx=", fundTx);
  } else {
    console.log("Funding not needed, balance sufficient.");
  }

  // return the transaction id
  return fundTx?.id || "";
}

export async function POST(req: Request) {
  const { fileSize } = await req.json();
  const fundTx = await lazyFund(fileSize);

  return NextResponse.json({ txResult: fundTx });
}
