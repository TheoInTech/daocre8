"use client";

// react
import { ReactNode, createContext, useContext, useState } from "react";
// types
import { ECurrency, EStep, IFormData } from "@/lib/schema/basic-details.schema";
import { IFormContext } from "@/lib/types/raise.type";

export const formDataDefaults: IFormData = {
  category: null,
  basicDetails: {
    name: "",
    location: null,
    imageUrl: "",
    pitchDeckUrl: "",
    videoUrl: "",
    launchDate: "",
    fundraiseEndDate: "",
  },
  team: {
    undoxxed: false,
    name: "",
    about: "",
    linkedinUrl: "",
    githubUrl: "",
    xUrl: "",
    pastProjectUrl: "",
    teamProfileUrls: [],
  },
  fundingTiers: [],
  projectStory: null,
  walletAddress: "",
  walletIsConfirmed: false,
  acceptedCurrency: ECurrency.SOL,
  fundingAmount: 0,
  capitalPercentage: 0,
  milestones: [],
};

const FormContext = createContext<IFormContext>({
  completion: {
    [EStep.AGREEMENT]: false,
    [EStep.CATEGORY]: false,
    [EStep.BASIC_DETAILS]: false,
    [EStep.REWARDS]: false,
    [EStep.TEAM]: false,
    [EStep.STORY]: false,
    [EStep.MILESTONES]: false,
  },
  setCompletion: () => {},
  step: 1,
  setStep: () => {},
  formData: formDataDefaults,
  setFormData: () => {},
  pageLoadingMessage: "",
  setPageLoadingMessage: () => {},
});

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<EStep>(EStep.AGREEMENT);

  const [formData, setFormData] = useState<IFormData>({ ...formDataDefaults });
  const [pageLoadingMessage, setPageLoadingMessage] = useState<string>("");
  const [completion, setCompletion] = useState({
    [EStep.AGREEMENT]: false,
    [EStep.CATEGORY]: false,
    [EStep.BASIC_DETAILS]: false,
    [EStep.REWARDS]: false,
    [EStep.TEAM]: false,
    [EStep.STORY]: false,
    [EStep.MILESTONES]: false,
  });

  return (
    <FormContext.Provider
      value={{
        completion,
        setCompletion,
        step,
        setStep,
        formData,
        setFormData,
        pageLoadingMessage,
        setPageLoadingMessage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormState = () => {
  return useContext(FormContext);
};
