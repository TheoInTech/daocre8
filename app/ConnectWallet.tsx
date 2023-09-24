"use client";

import { Button } from "@/components/ui/button";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { ClientOnly } from "remix-utils";

export const ConnectWallet = () => {
  const style = {
    background: "transparent",
    borderRadius: "10rem",
    border: "1px solid #e5e5e5",
    fontSize: "1rem",
    padding: "12px 16px",
  };

  return (
    <ClientOnly
      fallback={
        <Button variant="outline" size="md" disabled>
          Loading...
        </Button>
      }
    >
      {() => <WalletMultiButton style={style} />}
    </ClientOnly>
  );
};
