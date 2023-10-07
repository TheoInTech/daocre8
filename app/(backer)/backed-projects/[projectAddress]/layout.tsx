import { BackedProjectsProvider } from "@/app/(backer)/backed-projects/BackedProjectsContext";
import { ReactNode } from "react";

interface IProjectDetailLayout {
  params: {
    projectAddress: string;
  };
  children: ReactNode;
}

const BackedProjectDetailLayout = ({
  params,
  children,
}: IProjectDetailLayout) => {
  const { projectAddress } = params;

  return (
    <BackedProjectsProvider projectAddress={projectAddress}>
      {children}
    </BackedProjectsProvider>
  );
};

export default BackedProjectDetailLayout;
