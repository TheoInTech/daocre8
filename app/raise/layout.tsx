import { FormProvider } from "@/app/raise/FormContext";
import { ReactNode } from "react";

const RaiseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <FormProvider>
      <div className="h-full flex flex-col items-center justify-center">
        {children}
      </div>
    </FormProvider>
  );
};

export default RaiseLayout;
