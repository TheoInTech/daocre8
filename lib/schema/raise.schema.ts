import { isPreviousDate } from "@/lib/utils/isPreviousDate";
import { z } from "zod";

export enum EStep {
  AGREEMENT = "Agreement",
  CATEGORY = "Category",
  SUMMARY = "Summary",
  BASIC_DETAILS = "Basic Details",
  REWARDS = "Rewards",
  TEAM = "Team",
  STORY = "Project Story",
  MILESTONES = "Funding & Milestones",
  FINAL = "Final",
}

export enum ELocation {
  SG = "Singapore",
  PH = "Philippines",
  USA = "USA",
  EU = "Europe",
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

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const ImageSchema = z
  .any()
  .refine((file) => !!file, "Image is required.")
  .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    ".jpg, .jpeg, .png and .webp files are accepted."
  );

export const ImageSchemaOptional = z
  .any()
  .optional()
  .refine(
    (file) => !file || file.size <= MAX_FILE_SIZE,
    `Max file size is 5MB.`
  )
  .refine(
    (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
    ".jpg, .jpeg, .png and .webp files are accepted."
  );

const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100 MB in bytes
const ACCEPTED_VIDEO_TYPES = [
  "video/mp4",
  "video/mov",
  "video/avi",
  "video/mkv",
  "video/webm",
];

export const VideoSchema = z
  .any()
  .refine((file) => !!file, "Video is required.")
  .refine((files) => files?.size <= MAX_VIDEO_SIZE, `Max file size is 100MB.`)
  .refine(
    (file) => ACCEPTED_VIDEO_TYPES.includes(file?.type),
    ".mp4, .mov, .avi, .mkv, and .webm files are accepted."
  );

export const VideoSchemaOptional = z
  .any()
  .optional()
  .nullable()
  .refine(
    (file) => !file || file?.size <= MAX_VIDEO_SIZE,
    `Max file size is 100MB.`
  )
  .refine(
    (file) => !file || ACCEPTED_VIDEO_TYPES.includes(file?.type),
    ".mp4, .mov, .avi, .mkv, and .webm files are accepted."
  );

const MAX_PDF_SIZE = 10 * 1024 * 1024; // 10 MB in bytes
const ACCEPTED_PDF_TYPE = ["application/pdf"];

export const PDFSchema = z
  .any()
  .refine((file) => !!file, "PDF is required.")
  .refine((file) => file?.size <= MAX_PDF_SIZE, `Max file size is 10MB.`)
  .refine(
    (file) => ACCEPTED_PDF_TYPE.includes(file?.type),
    ".pdf files are accepted."
  );

export const PDFSchemaOptional = z
  .any()
  .optional()
  .refine(
    (file) => !file || file?.size <= MAX_PDF_SIZE,
    `Max file size is 10MB.`
  )
  .refine(
    (file) => !file || ACCEPTED_PDF_TYPE.includes(file?.type),
    ".pdf files are accepted."
  );

export const FundingTierSchema = z
  .object({
    name: z.string().nonempty("Tier name is required"),
    amountInUsd: z.coerce.number().min(1, "Amount must be greater than 0"),
    description: z
      .string()
      .nonempty("Tier description is required")
      .max(250, "Tier description must be less than 200 characters"),
    imageUrl: ImageSchema,
  })
  .required();

// just used for the form page
export const FundingTierSchemaArray = z
  .object({ fundingTiers: z.array(FundingTierSchema) })
  .required();

export const TeamSchema = z
  .object({
    undoxxed: z.boolean(),
    name: z.string().optional(),
    about: z.string().optional(),
    linkedinUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    xUrl: z.string().optional(),
    pastProjectUrl: z.string().optional(),
    teamProfileUrls: z.array(
      z.object({
        url: z.string().optional(),
      })
    ),
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
  imageUrl: ImageSchema,
  videoUrl: VideoSchemaOptional,
  inspiration: z.string().nonempty("Please tell us more about your story."),
});

export const MilestoneSchema = z.object({
  percentage: z.coerce
    .number()
    .min(1, "Amount must be greater than 0")
    .max(100, "Amount must be less than or equal to 100"),
  description: z.string().nonempty("Milestone description is required"),
});

export const StretchGoalSchema = z.object({
  percentage: z.coerce
    .number()
    .refine((val) => !val || (val > 0 && val <= 100), {
      message: "Amount must be 0 to 100",
    }),
  description: z.string(),
});

export const FundingAngMilestonesSchema = z.object({
  fundingAmount: z.coerce
    .number()
    .min(1, "Funding amount must be greater than 0"),
  walletAddress: z.string().nonempty("Please connect your Solana wallet"),
  walletIsConfirmed: z.boolean().refine((val) => !!val, {
    message: "Please confirm your wallet address",
  }),
  currency: z.nativeEnum(ECurrency),
  capitalPercentage: z.coerce
    .number()
    .min(1, "Amount must be greater than 0")
    .max(100, "Amount must be less than or equal to 100"),
  milestones: z.array(MilestoneSchema),
  stretchGoals: z.array(StretchGoalSchema),
});

export const BasicDetailsSchema = z
  .object({
    name: z.string().nonempty("Project name is required"),
    location: z
      .union([z.nativeEnum(ELocation), z.literal(null)])
      .refine((val) => val !== null, { message: "Location is required" }),
    imageUrl: ImageSchema,
    pdfUrl: PDFSchema,
    videoUrl: VideoSchemaOptional,
    inspiration: z.string().nonempty("Please tell us more about your story."),
    fundraiseEndDate: z
      .string()
      .refine((val) => !isPreviousDate(val), {
        message: "Fundraise's end date can't be previous date",
      })
      .refine((val) => val !== "", {
        message: "Fundraise's end date is required",
      }),
    launchDate: z
      .string()
      .refine((val) => !isPreviousDate(val), {
        message: "Launch date can't be previous date",
      })
      .refine((val) => val !== "", { message: "Launch date is required" }),
  })
  .required()
  .refine(
    (data) => {
      const fundraiseEndDate = new Date(data.fundraiseEndDate).getTime();
      const launchDate = new Date(data.launchDate).getTime();
      return launchDate > fundraiseEndDate;
    },
    { message: "Launch date must be after fundraise's end date" }
  );

export const FormDataSchema = z.object({
  category: z.union([z.nativeEnum(ECategory), z.literal(null)]),
  basicDetails: BasicDetailsSchema,
  team: TeamSchema,
  fundingTiers: z.array(FundingTierSchema),
  fundingAndMilestones: FundingAngMilestonesSchema,
});

// Infer the types from Zod schemas
export type IFundingTier = z.infer<typeof FundingTierSchema>;
export type IFundingTierArray = z.infer<typeof FundingTierSchemaArray>;
export type ITeam = z.infer<typeof TeamSchema>;
export type IProjectStory = z.infer<typeof ProjectStorySchema>;
export type IMilestone = z.infer<typeof MilestoneSchema>;
export type IFundingAngMilestones = z.infer<typeof FundingAngMilestonesSchema>;
export type IFormData = z.infer<typeof FormDataSchema>;
export type IBasicDetails = z.infer<typeof BasicDetailsSchema>;
