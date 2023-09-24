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

export const FundingTierSchema = z.array(
  z
    .object({
      name: z.string().nonempty("Tier name is required"),
      amountInUsd: z.coerce.number().min(1, "Amount must be greater than 0"),
      description: z.string().nonempty("Tier description is required"),
      imageUrl: z.string().nonempty("Tier image is required"),
    })
    .required()
);

export const TeamSchema = z
  .object({
    undoxxed: z.boolean(),
    name: z.string().optional(),
    about: z.string().optional(),
    linkedinUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    xUrl: z.string().optional(),
    pastProjectUrl: z.string().optional(),
    teamProfileUrls: z.array(z.string()).optional(),
  })
  .refine(
    (data) => {
      return data.undoxxed ||
        (data.name && data.about && data.linkedinUrl && data.xUrl)
        ? true
        : false;
    },
    {
      message: "Please fill in all required fields if you want to be doxxed",
      path: ["undoxxed"],
    }
  );

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
    name: z.string().nonempty("Project name is required"),
    location: z
      .union([z.nativeEnum(ELocation), z.literal(null)])
      .refine((val) => val !== null, { message: "Location is required" }),
    imageUrl: z.string().nonempty("Project image is required"),
    pitchDeckUrl: z.string().nonempty("Pitch deck is required"),
    videoUrl: z.string().optional().nullable(),
    launchDate: z
      .string()
      .refine((val) => !isPreviousDate(val), {
        message: "Launch date can't be previous date",
      })
      .refine((val) => val !== "", { message: "Launch date is required" }),
    fundingAmount: z.coerce
      .number()
      .min(1, "Funding amount must be greater than 0"),
    fundraiseEndDate: z
      .string()
      .refine((val) => !isPreviousDate(val), {
        message: "Fundraise's end date can't be previous date",
      })
      .refine((val) => val !== "", {
        message: "Fundraise's end date is required",
      }),
  })
  .required();

export const FormDataSchema = z
  .object({
    category: z.union([z.nativeEnum(ECategory), z.literal(null)]),
    basicDetails: BasicDetailsSchema,
    team: TeamSchema,
    fundingTiers: FundingTierSchema,
    projectStory: z.union([ProjectStorySchema, z.literal(null)]),
    walletAddress: z.string(),
    walletIsConfirmed: z.boolean(),
    acceptedCurrency: z.nativeEnum(ECurrency),
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
