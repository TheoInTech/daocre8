import { EStep, IFormData } from "@/lib/schema/basic-details.schema";
import { Dispatch, SetStateAction } from "react";

export type TCompletion = Record<
  | EStep.AGREEMENT
  | EStep.CATEGORY
  | EStep.BASIC_DETAILS
  | EStep.REWARDS
  | EStep.TEAM
  | EStep.STORY
  | EStep.MILESTONES,
  boolean
>;
export interface IFormContext {
  completion: TCompletion;
  setCompletion: Dispatch<SetStateAction<TCompletion>>;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  pageLoadingMessage: string;
  setPageLoadingMessage: Dispatch<SetStateAction<string>>;
}
