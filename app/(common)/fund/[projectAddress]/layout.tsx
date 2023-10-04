import { FundProjectDetailProvider } from "@/app/(common)/fund/[projectAddress]/FundProjectDetailContext";
import { ReactNode } from "react";

interface IProjectDetailLayout {
  params: {
    projectAddress: string;
  };
  children: ReactNode;
}

const FundProjectDetailLayout = ({
  params,
  children,
}: IProjectDetailLayout) => {
  const { projectAddress } = params;

  return (
    <FundProjectDetailProvider projectAddress={projectAddress}>
      {children}
    </FundProjectDetailProvider>
  );
};

export default FundProjectDetailLayout;
