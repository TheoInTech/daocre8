"use client";

// react
import { ReactNode, createContext, useContext, useState } from "react";
// types
import { ESidebar, IProjectDetailContext } from "@/lib/types/creator.types";
// mock
import { mockProjectUpdates, mockProjectsData } from "@/lib/mock";
import { IMilestone } from "@/lib/types/milestones.types";
import { IMilestoneAchievementPoll } from "@/lib/types/polls.types";
import { IProjectUpdate } from "@/lib/types/updates.types";

const ProjectDetailContext = createContext<IProjectDetailContext>({
  activeSidebar: ESidebar.PROJECT_DETAILS,
  setActiveSidebar: () => {},
  project: null,
  milestones: [],
  milestonePolls: [],
  updates: [],
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
      }}
    >
      {children}
    </ProjectDetailContext.Provider>
  );
};

export const useProjectDetailState = () => {
  return useContext(ProjectDetailContext);
};
