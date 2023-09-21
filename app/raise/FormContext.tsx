"use client";

// react
import { ReactNode, createContext, useContext, useState } from "react";
// types
import {
  ECurrency,
  EStep,
  IFormContext,
  IFormData,
} from "@/lib/types/raise.type";

export const formDataDefaults: IFormData = {
  category: null,
  name: "",
  location: null,
  imageUrl: "",
  pitchDeckUrl: "",
  videoUrl: "",
  launchDate: new Date(),
  fundraiseEndDate: new Date(),
  fundingTiers: [],
  teamProfileUrls: [],
  projectStory: null,
  walletAddress: "",
  walletIsConfirmed: false,
  acceptedCurrency: ECurrency.SOL,
  fundingAmount: 0,
  capitalPercentage: 0,
  milestones: [],
};

const FormContext = createContext<IFormContext>({
  handleBack: () => {},
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

  const handleBack = () => {
    setStep(EStep.SUMMARY);
  };

  return (
    <FormContext.Provider
      value={{
        handleBack,
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
