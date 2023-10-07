"use client";

// react
import { ReactNode, createContext, useContext, useState } from "react";
// types
import {
  ETabsForBackedProjects,
  IProjectDetailContext,
} from "@/lib/types/backer.types";
// mock
import {
  mockProjectChangePolls1,
  mockProjectChangePolls2,
  mockProjectMilestonePolls,
  mockProjectMilestones,
  mockProjectUpdates,
  mockProjectsData,
} from "@/lib/mock";
import { IFundingTier } from "@/lib/schema/raise.schema";
import { IProjectUpdate } from "@/lib/types/updates.types";

const BackedProjectsContext = createContext<IProjectDetailContext>({
  activeSidebar: ETabsForBackedProjects.PROJECT_DETAILS,
  setActiveSidebar: () => {},
  project: null,
  milestones: [],
  milestonePolls: [],
  updates: [],
  changePolls: [],
  tiers: [],
});

export const BackedProjectsProvider = ({
  projectAddress,
  children,
}: {
  projectAddress: string;
  children: ReactNode;
}) => {
  const [activeSidebar, setActiveSidebar] = useState<ETabsForBackedProjects>(
    ETabsForBackedProjects.PROJECT_DETAILS
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

  // mock project updates
  const updates = mockProjectUpdates?.filter(
    (mock) => mock.projectAddress === projectAddress
  ) as unknown as Array<IProjectUpdate>;

  // mock tiers and rewards
  const tiers =
    project?.project_ipfs_hash?.fundingTiers ?? ([] as Array<IFundingTier>);

  return (
    <BackedProjectsContext.Provider
      value={{
        activeSidebar,
        setActiveSidebar,
        project,
        milestones,
        milestonePolls,
        updates,
        changePolls,
        tiers,
      }}
    >
      {children}
    </BackedProjectsContext.Provider>
  );
};

export const useBackedProjectsState = () => {
  return useContext(BackedProjectsContext);
};
