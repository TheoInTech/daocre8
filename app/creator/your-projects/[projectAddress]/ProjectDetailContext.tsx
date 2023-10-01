"use client";

// react
import { ReactNode, createContext, useContext, useState } from "react";
// types
import { ESidebar } from "@/lib/schema/creator.schema";
import { IProjectDetailContext } from "@/lib/types/creator.types";

const ProjectDetailContext = createContext<IProjectDetailContext>({
  activeSidebar: ESidebar.PROJECT_DETAILS,
  setActiveSidebar: () => {},
});

export const ProjectDetailProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeSidebar, setActiveSidebar] = useState<ESidebar>(
    ESidebar.PROJECT_DETAILS
  );

  return (
    <ProjectDetailContext.Provider
      value={{
        activeSidebar,
        setActiveSidebar,
      }}
    >
      {children}
    </ProjectDetailContext.Provider>
  );
};

export const useProjectDetailState = () => {
  return useContext(ProjectDetailContext);
};
