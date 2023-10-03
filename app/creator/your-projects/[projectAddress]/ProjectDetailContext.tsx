"use client";

// react
import { ReactNode, createContext, useContext, useState } from "react";
// types
import { ESidebar } from "@/lib/schema/creator.schema";
import { IProjectDetailContext } from "@/lib/types/creator.types";
// mock
import { mockProjectsData } from "@/lib/mock";
import { IMilestone } from "@/lib/types/milestones.types";
import { IMilestoneAchievementPoll } from "@/lib/types/polls.types";

const ProjectDetailContext = createContext<IProjectDetailContext>({
  activeSidebar: ESidebar.PROJECT_DETAILS,
  setActiveSidebar: () => {},
  project: null,
  milestones: [],
  milestonePolls: [],
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

  return (
    <ProjectDetailContext.Provider
      value={{
        activeSidebar,
        setActiveSidebar,
        project,
        milestones,
        milestonePolls,
      }}
    >
      {children}
    </ProjectDetailContext.Provider>
  );
};

export const useProjectDetailState = () => {
  return useContext(ProjectDetailContext);
};
