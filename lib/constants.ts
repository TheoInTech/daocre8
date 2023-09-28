import idl from "@/lib/idl.json";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

/* Constants for RPC Connection the Solana Blockchain */
export const commitmentLevel = "processed";

export const endpoint =
  process.env.NEXT_PUBLIC_ENVIRONMENT === "devnet"
    ? process.env.NEXT_PUBLIC_DEVNET_RPC_URL!
    : clusterApiUrl("devnet");

export const connection = new Connection(endpoint, commitmentLevel);

/* Constants for the Deployed "DAOCre-8" Program */
export const PROGRAM_PUBKEY = new PublicKey(idl.metadata.address);
export const PROGRAM_INTERFACE = JSON.parse(JSON.stringify(idl));
