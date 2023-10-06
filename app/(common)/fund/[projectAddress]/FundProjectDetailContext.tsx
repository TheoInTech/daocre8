"use client";

// react
import { ReactNode, createContext, useContext, useState } from "react";
// types
import {
  ETabsForToBeFundedProjects,
  IToBeFundedProjectDetailContext,
} from "@/lib/types/backer.types";
// mock
import { mockProjectUpdates, mockProjectsData } from "@/lib/mock";
import { IFundingTier } from "@/lib/schema/raise.schema";
import { IMilestone } from "@/lib/types/milestones.types";
import { IMilestoneAchievementPoll } from "@/lib/types/polls.types";
import { IProjectUpdate } from "@/lib/types/updates.types";

const ProjectDetailContext = createContext<IToBeFundedProjectDetailContext>({
  activeSidebar: ETabsForToBeFundedProjects.PROJECT_DETAILS,
  setActiveSidebar: () => {},
  project: null,
  milestones: [],
  updates: [],
  tiers: [],
});

export const FundProjectDetailProvider = ({
  projectAddress,
  children,
}: {
  projectAddress: string;
  children: ReactNode;
}) => {
  const [activeSidebar, setActiveSidebar] =
    useState<ETabsForToBeFundedProjects>(
      ETabsForToBeFundedProjects.PROJECT_DETAILS
    );

  // TODO: Fetch the project details here
  // For now, use mock
  const project = mockProjectsData.find(
    (mock) => mock.address === projectAddress
  );

  // mock milestones
  const milestones: Array<IMilestone> =
    project?.project_ipfs_hash?.fundingAndMilestones?.milestones.map(
      (milestone, index) => ({
        idx: index + 1,
        percentage: milestone.percentage ?? 0,
        milestone_ipfs_hash: milestone.description ?? "",
      })
    ) ?? [];

  // mock milestone polls
  const milestonePolls: Array<IMilestoneAchievementPoll> = [
    {
      milestone: milestones[0],
      voter_map: [],
      start_datetime: "2023-10-01",
      end_datetime: "2023-12-01",
    },
  ];

  // mock project updates
  const updates = mockProjectUpdates?.filter(
    (mock) => mock.projectAddress === projectAddress
  ) as unknown as Array<IProjectUpdate>;

  // mock tiers and rewards
  const tiers =
    project?.project_ipfs_hash?.fundingTiers ?? ([] as Array<IFundingTier>);

  return (
    <ProjectDetailContext.Provider
      value={{
        activeSidebar,
        setActiveSidebar,
        project,
        milestones,
        updates,
        tiers,
      }}
    >
      {children}
    </ProjectDetailContext.Provider>
  );
};

export const useFundProjectDetailState = () => {
  return useContext(ProjectDetailContext);
};
