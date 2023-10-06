export interface IProjectUpdate {
  projectAddress: string;
  idx: number;
  title: string;
  description: string;
}

export interface IProjectChangePollVoterMap {
  key: string;
  vote: number;
}
export interface IProjectChangePoll {
  idx: number;
  projectAddress: string;
  question: string;
  options: Array<string>;
  voterMap: Array<IProjectChangePollVoterMap>;
  startDateTime: string;
  endDateTime: string;
}
