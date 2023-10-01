import { ProjectDetailProvider } from "@/app/creator/your-projects/[projectAddress]/ProjectDetailContext";
import { ReactNode } from "react";

const ProjectDetailLayout = ({ children }: { children: ReactNode }) => {
  return <ProjectDetailProvider>{children}</ProjectDetailProvider>;
};

export default ProjectDetailLayout;
