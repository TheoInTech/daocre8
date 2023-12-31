import { IFormData, IFundingTier } from "@/lib/schema/raise.schema";
import { IMilestone } from "@/lib/types/milestones.types";
import {
  IDecisionMakingPoll,
  IMilestoneAchievementPoll,
} from "@/lib/types/polls.types";
import { IProjectUpdate } from "@/lib/types/updates.types";
import { Dispatch, SetStateAction } from "react";

// Backed Projects
export enum ETabsForBackedProjects {
  PROJECT_DETAILS = "Project Details",
  UPDATES = "Project Updates",
  MILESTONES = "Funding & Milestones",
  POLLS = "Change Polls",
  TEAM = "Team",
  TIERS = "Tiers & Rewards",
}

export interface IBackedProject {
  address: string;
  balance: number;
  project_ipfs_hash: IFormData;
}

export interface IProjectDetailContext {
  activeSidebar: ETabsForBackedProjects;
  setActiveSidebar: Dispatch<SetStateAction<ETabsForBackedProjects>>;
  project: IBackedProject | null | undefined;
  milestones: Array<IMilestone & { address: string }> | null | undefined;
  milestonePolls: Array<IMilestoneAchievementPoll> | null | undefined;
  updates: Array<IProjectUpdate>;
  changePolls: Array<IDecisionMakingPoll>;
  tiers: Array<IFundingTier> | null | undefined;
}

//   To Be Funded Projects
export enum ETabsForToBeFundedProjects {
  PROJECT_DETAILS = "Project Details",
  UPDATES = "Project Updates",
  TIERS = "Tiers & Rewards",
  MILESTONES = "Funding & Milestones",
  TEAM = "Team",
}

export interface IToBeFundedProject {
  address: string;
  balance: number;
  project_ipfs_hash: IFormData;
}

export interface IToBeFundedProjectDetailContext {
  activeSidebar: ETabsForToBeFundedProjects;
  setActiveSidebar: Dispatch<SetStateAction<ETabsForToBeFundedProjects>>;
  project: IToBeFundedProject | null | undefined;
  milestones: Array<IMilestone> | null | undefined;
  updates: Array<IProjectUpdate>;
  tiers: Array<IFundingTier> | null | undefined;
}
