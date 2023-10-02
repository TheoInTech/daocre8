"use client";

// react
import { ReactNode, createContext, useContext, useState } from "react";
// types
import { ESidebar } from "@/lib/schema/creator.schema";
import { IProjectDetailContext } from "@/lib/types/creator.types";
// mock
import { mockProjectsData } from "@/lib/mock";

const ProjectDetailContext = createContext<IProjectDetailContext>({
  activeSidebar: ESidebar.PROJECT_DETAILS,
  setActiveSidebar: () => {},
  project: null,
});

export const ProjectDetailProvider = ({
  projectAddress,
  children,
}: {
  projectAddress: string;
  children: ReactNode;
}) => {
  const [activeSidebar, setActiveSidebar] = useState<ESidebar>(
    ESidebar.PROJECT_DETAILS
  );

  // TODO: Fetch the project details here
  // For now, use mock
  const project = mockProjectsData.find(
    (mock) => mock.address === projectAddress
  );

  return (
    <ProjectDetailContext.Provider
      value={{
        activeSidebar,
        setActiveSidebar,
        project,
      }}
    >
      {children}
    </ProjectDetailContext.Provider>
  );
};

export const useProjectDetailState = () => {
  return useContext(ProjectDetailContext);
};
