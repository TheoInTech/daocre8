import { IMilestone } from "@/lib/types/milestones.types";

export enum EPollType {
  DECISION_MAKING,
  MILESTONE_ACHIEVEMENT,
}

export interface IMilestoneAchievementPollVoterMap {
  key: string;
  vote: boolean;
}

export interface IMilestoneAchievementPoll {
  milestone: IMilestone;
  voter_map: Array<IMilestoneAchievementPollVoterMap>;
  start_datetime: string;
  end_datetime: string;
}

export interface IDecisionMakingPollVoterMap {
  key: string;
  vote: number;
}

export interface IDecisionMakingPoll {
  question: string;
  options: Array<string>;
  voter_map: Array<IDecisionMakingPollVoterMap>;
  start_datetime: string;
  end_datetime: string;
}
