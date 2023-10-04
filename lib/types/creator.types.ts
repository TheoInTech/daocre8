import { ESidebar } from "@/lib/schema/creator.schema";
import { IFormData } from "@/lib/schema/raise.schema";
import { IMilestone } from "@/lib/types/milestones.types";
import { IMilestoneAchievementPoll } from "@/lib/types/polls.types";
import { IProjectUpdate } from "@/lib/types/updates.types";
import { Dispatch, SetStateAction } from "react";

export interface IProject {
  address: string;
  balance: number;
  project_ipfs_hash: IFormData;
}

export interface IProjectDetailContext {
  activeSidebar: ESidebar;
  setActiveSidebar: Dispatch<SetStateAction<ESidebar>>;
  project: IProject | null | undefined;
  milestones: Array<IMilestone> | null | undefined;
  milestonePolls: Array<IMilestoneAchievementPoll> | null | undefined;
  updates: Array<IProjectUpdate>;
}
