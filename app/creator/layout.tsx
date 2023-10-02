import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Creator",
};

const CreatorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full flex flex-col gap-4 flex-grow pt-16 md:pt-0">
      {children}
    </div>
  );
};

export default CreatorLayout;
