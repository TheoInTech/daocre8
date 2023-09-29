"use client";

import {
  PROGRAM_INTERFACE,
  PROGRAM_PUBKEY,
  commitmentLevel,
} from "@/lib/constants";
import { Daocre8 } from "@/lib/types/daocre8.types";
import { AnchorProvider, Program } from "@project-serum/anchor";
import {
  AnchorWallet,
  useAnchorWallet,
  useConnection,
} from "@solana/wallet-adapter-react";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface IProgramContext {
  isTransactionPending: boolean;
  setIsTransactionPending: (isPending: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  program: Program<Daocre8> | undefined;
}

const ProgramContext = createContext<IProgramContext>({
  isTransactionPending: false,
  setIsTransactionPending: () => {},
  isLoading: false,
  setIsLoading: () => {},
  program: undefined,
});

export const ProgramProvider = ({ children }: { children: ReactNode }) => {
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet() as AnchorWallet;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isTransactionPending, setIsTransactionPending] =
    useState<boolean>(false);

  const program = useMemo(() => {
    if (anchorWallet) {
      const provider = new AnchorProvider(connection, anchorWallet, {
        preflightCommitment: commitmentLevel,
      });

      return new Program(
        PROGRAM_INTERFACE,
        PROGRAM_PUBKEY,
        provider
      ) as Program<Daocre8>;
    }
  }, [connection, anchorWallet]);

  const exposed: IProgramContext = {
    isTransactionPending,
    setIsTransactionPending,
    isLoading,
    setIsLoading,
    program,
  };

  return (
    <ProgramContext.Provider value={exposed}>
      {children}
    </ProgramContext.Provider>
  );
};

export const useProgram = () => {
  let context = useContext(ProgramContext);
  if (context === undefined) {
    throw new Error("useProgram must be used inside ProgramProvider");
  } else {
    return context;
  }
};
