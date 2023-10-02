import { ProjectDetailProvider } from "@/app/creator/your-projects/[projectAddress]/ProjectDetailContext";
import { ReactNode } from "react";

interface IProjectDetailLayout {
  params: {
    projectAddress: string;
  };
  children: ReactNode;
}

const ProjectDetailLayout = ({ params, children }: IProjectDetailLayout) => {
  const { projectAddress } = params;
  return (
    <ProjectDetailProvider projectAddress={projectAddress}>
      {children}
    </ProjectDetailProvider>
  );
};

export default ProjectDetailLayout;
