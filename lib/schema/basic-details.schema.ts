import { isPreviousDate } from "@/lib/utils";
import { z } from "zod";

export enum EStep {
  AGREEMENT,
  CATEGORY,
  SUMMARY,
  BASIC_DETAILS,
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

export const FundingTierSchema = z.object({
  amountInUsd: z.number(),
  description: z.string(),
  imageUrl: z.string(),
});

export const TeamSchema = z.object({
  doxxed: z.boolean(),
  name: z.string(),
  about: z.string(),
  linkedinUrl: z.string(),
  githubUrl: z.string(),
  xUrl: z.string(),
  pastProjectUrl: z.string(),
  othersProfiles: z.array(z.string()),
});

export const ProjectStorySchema = z.object({
  imagesUrl: z.array(z.string()),
  videosUrl: z.array(z.string()),
  inspiration: z.string(),
});

export const MilestoneSchema = z.object({
  percentage: z.number(),
  description: z.string(),
});

export const BasicDetailsSchema = z
  .object({
    name: z.string(),
    location: z.union([z.nativeEnum(ELocation), z.literal(null)]),
    imageUrl: z.string(),
    pitchDeckUrl: z.string(),
    videoUrl: z.string().optional().nullable(),
    launchDate: z.string().refine((val) => !isPreviousDate(val), {
      message: "Launch Date can't be previous date",
    }),
    fundraiseEndDate: z.string().refine((val) => !isPreviousDate(val), {
      message: "Fundraise End Date can't be previous date",
    }),
  })
  .required();

export const FormDataSchema = z
  .object({
    category: z.union([z.nativeEnum(ECategory), z.literal(null)]),
    name: z.string(),
    location: z.union([z.nativeEnum(ELocation), z.literal(null)]),
    imageUrl: z.string(),
    pitchDeckUrl: z.string(),
    videoUrl: z.string().optional().nullable(),
    launchDate: z.string().refine((val) => !isPreviousDate(val), {
      message: "Launch Date can't be previous date",
    }),
    fundraiseEndDate: z.string().refine((val) => !isPreviousDate(val), {
      message: "Fundraise End Date can't be previous date",
    }),
    fundingTiers: z.array(FundingTierSchema),
    teamProfileUrls: z.array(z.string()),
    projectStory: z.union([ProjectStorySchema, z.literal(null)]),
    walletAddress: z.string(),
    walletIsConfirmed: z.boolean(),
    acceptedCurrency: z.nativeEnum(ECurrency),
    fundingAmount: z.number(),
    capitalPercentage: z.number(),
    milestones: z.array(MilestoneSchema),
  })
  .required();

// Infer the types from Zod schemas
export type IFundingTier = z.infer<typeof FundingTierSchema>;
export type ITeam = z.infer<typeof TeamSchema>;
export type IProjectStory = z.infer<typeof ProjectStorySchema>;
export type IMilestone = z.infer<typeof MilestoneSchema>;
export type IFormData = z.infer<typeof FormDataSchema>;
export type IBasicDetails = z.infer<typeof BasicDetailsSchema>;
