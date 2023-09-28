import { EStep, IFormData } from "@/lib/schema/raise.schema";
import { Dispatch, SetStateAction } from "react";

export type TCompletion = Record<
  | EStep.AGREEMENT
  | EStep.CATEGORY
  | EStep.BASIC_DETAILS
  | EStep.TEAM
  // | EStep.STORY
  | EStep.MILESTONES
  | EStep.REWARDS,
  boolean
>;
export interface IFormContext {
  completion: TCompletion;
  setCompletion: Dispatch<SetStateAction<TCompletion>>;
  step: EStep;
  setStep: Dispatch<SetStateAction<EStep>>;
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  pageLoadingMessage: string;
  setPageLoadingMessage: Dispatch<SetStateAction<string>>;
}
