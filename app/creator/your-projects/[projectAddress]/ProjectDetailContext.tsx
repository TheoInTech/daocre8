"use client";

// react
import { ReactNode, createContext, useContext, useState } from "react";
// types
import { ESidebar, IProjectDetailContext } from "@/lib/types/creator.types";
// mock
import {
  mockProjectChangePolls1,
  mockProjectChangePolls2,
  mockProjectMilestonePolls,
  mockProjectMilestones,
  mockProjectUpdates,
  mockProjectsData,
} from "@/lib/mock";
import { IProjectUpdate } from "@/lib/types/updates.types";

const ProjectDetailContext = createContext<IProjectDetailContext>({
  activeSidebar: ESidebar.PROJECT_DETAILS,
  setActiveSidebar: () => {},
  project: null,
  milestones: [],
  milestonePolls: [],
  updates: [],
  changePolls: [],
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

  // mock milestones
  const milestones = mockProjectMilestones?.filter(
    (mock) => mock.project_dao_id === projectAddress
  );

  // mock milestone polls
  const milestonePolls = mockProjectMilestonePolls?.filter(
    (mock) => mock.project_dao_id === projectAddress
  );

  // mock change polls
  const changePolls = [
    ...mockProjectChangePolls1,
    ...mockProjectChangePolls2,
  ]?.filter((mock) => mock.project_dao_id === projectAddress);

  const updates = mockProjectUpdates?.filter(
    (mock) => mock.projectAddress === projectAddress
  ) as unknown as Array<IProjectUpdate>;

  return (
    <ProjectDetailContext.Provider
      value={{
        activeSidebar,
        setActiveSidebar,
        project,
        milestones,
        milestonePolls,
        updates,
        changePolls,
      }}
    >
      {children}
    </ProjectDetailContext.Provider>
  );
};

export const useProjectDetailState = () => {
  return useContext(ProjectDetailContext);
};
