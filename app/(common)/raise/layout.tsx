import { FormProvider } from "@/common/raise/FormContext";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Raise",
};

const RaiseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <FormProvider>
      <div className="h-full min-h-screen flex flex-col items-center justify-center px-8 md:px-24">
        {children}
      </div>
    </FormProvider>
  );
};

export default RaiseLayout;
