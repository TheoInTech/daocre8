export type Tag = {
  name: string;
  value: string;
};

interface BasicDetailsSchema {
  name: string;
  location: string;
  imageUrl: string;
  pdfUrl: string;
  videoUrl: string;
  inspiration: string;
  fundraiseEndDate: string;
  launchDate: string;
  xUrl: string;
  linkedinUrl: string;
  githubUrl: string;
}

interface TeamProfileUrlSchema {
  url: string;
}

interface TeamSchema {
  undoxxed: boolean;
  name: string;
  about: string;
  linkedinUrl: string;
  githubUrl: string;
  xUrl: string;
  pastProjectUrl: string;
  teamProfileUrls: TeamProfileUrlSchema[];
}

interface FundingTierSchema {
  name: string;
  description: string;
  imageUrl: string;
}

interface FundingAngMilestonesSchema {
  currency: string;
}

export interface IProject {
  category: string;
  basicDetails: BasicDetailsSchema;
  team: TeamSchema;
  fundingTiers: FundingTierSchema[];
  fundingAndMilestones: FundingAngMilestonesSchema;
}
