import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Fund a Project",
};

const FundLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full min-h-screen flex flex-col items-center justify-center px-8 md:px-24 py-40">
      {children}
    </div>
  );
};

export default FundLayout;
