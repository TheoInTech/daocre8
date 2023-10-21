import Irys from "@irys/sdk";
import { NextResponse } from "next/server";
import { ReadableStream } from "stream/web";

/**
 *
 * @returns A signed version of the data, signatureData, as sent by the client.
 */
async function signDataOnServer(signatureData: Buffer): Promise<Buffer> {
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

  const signature = await serverIrys.tokenConfig.sign(signatureData);

  return Buffer.from(signature);
}

async function readFromStream(
  stream: ReadableStream<Uint8Array> | null
): Promise<string> {
  if (!stream) return "";
  const reader = stream.getReader();
  let result = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    result += new TextDecoder().decode(value);
  }

  return result;
}

export async function POST(req: Request) {
  //@ts-ignore
  const rawData = await readFromStream(req.body);
  const body = JSON.parse(rawData);

  const signatureData = Buffer.from(body.signatureData, "hex");
  const signature = await signDataOnServer(signatureData);

  return NextResponse.json({ signature: signature.toString("hex") });
}
