import Irys from "@irys/sdk";
import { NextResponse } from "next/server";

/**
 * @returns The server's public key.
 */
async function serverInit(): Promise<Buffer> {
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

  const publicKey = serverIrys.tokenConfig.getSigner().publicKey;
  return publicKey;
}

export async function GET(req: Request) {
  return NextResponse.json({ pubKey: (await serverInit()).toString("hex") });
}
