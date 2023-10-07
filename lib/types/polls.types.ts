export enum EPollType {
  DECISION_MAKING,
  MILESTONE_ACHIEVEMENT,
}

export interface IMilestoneAchievementPollVoterMap {
  key: string;
  vote: boolean;
}

export interface IMilestoneAchievementPoll {
  idx: number;
  project_dao_id: string;
  milestone_id: string;
  voter_map: Array<IMilestoneAchievementPollVoterMap>;
  start_datetime: string;
  end_datetime: string;
}

export interface IDecisionMakingPollVoterMap {
  key: string;
  vote: number | string;
}

export interface IDecisionMakingPoll {
  idx: number;
  project_dao_id: string;
  question: string;
  options: Array<string>;
  voter_map: Array<IDecisionMakingPollVoterMap>;
  start_datetime: string;
  end_datetime: string;
}
