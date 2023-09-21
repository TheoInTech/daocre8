import { Dispatch, SetStateAction } from "react";

export enum EStep {
  AGREEMENT,
  SUMMARY,
  CATEGORY,
  REWARDS,
  TEAM,
  STORY,
  MILESTONES,
  FINAL,
}

export enum ELocation {
  SG = "Singapore",
  PH = "Philippines",
}

export enum ECategory {
  ART = "Art",
  COMICS = "Comics",
  CRAFTS = "Crafts",
  DANCE = "Dance",
  FASHION = "Fashion",
  FILMS = "Films & Video",
  FOOD = "Food",
  GAMES = "Games",
  HARDWARE = "Hardware",
  JOURNALISM = "Journalism",
  MUSIC = "Music",
  PHOTOGRAPHY = "Photography",
  SOFTWARE = "Software",
  THEATER = "Theater",
}

export enum ECurrency {
  SOL = "SOL",
  USDC = "USDC",
  USDT = "USDT",
  USD = "USD",
}

export interface IFundingTier {
  amountInUsd: number;
  description: string;
  imageUrl: string;
}

export interface ITeam {
  doxxed: boolean;
  name: string;
  about: string;
  linkedinUrl: string;
  githubUrl: string;
  xUrl: string;
  pastProjectUrl: string;
  othersProfiles: string[];
}

export interface IProjectStory {
  imagesUrl: string[];
  videosUrl: string[];
  inspiration: string;
}

export interface IMilestone {
  percentage: number;
  description: string;
}

export interface IFormData {
  category: ECategory | null;
  name: string;
  location: ELocation | null;
  imageUrl: string;
  pitchDeckUrl: string;
  videoUrl: string;
  launchDate: Date;
  fundraiseEndDate: Date;
  fundingTiers: IFundingTier[];
  teamProfileUrls: string[];
  projectStory: IProjectStory | null;
  walletAddress: string;
  walletIsConfirmed: boolean;
  acceptedCurrency: ECurrency;
  fundingAmount: number;
  capitalPercentage: number;
  milestones: IMilestone[];
}

export interface IFormContext {
  handleBack: () => void;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  pageLoadingMessage: string;
  setPageLoadingMessage: Dispatch<SetStateAction<string>>;
}
