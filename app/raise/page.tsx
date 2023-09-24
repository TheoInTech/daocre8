"use client";

// packages
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
// raise
import { Agreement } from "@/app/raise/Agreement";
import { BasicDetails } from "@/app/raise/BasicDetails";
import { Category } from "@/app/raise/Category";
import { useFormState } from "@/app/raise/FormContext";
import { ProjectStory } from "@/app/raise/ProjectStory";
import { Rewards } from "@/app/raise/Rewards";
import { Summary } from "@/app/raise/Summary";
import { Team } from "@/app/raise/Team";
// types
import { EStep, IFormData } from "@/lib/schema/raise.schema";

const RaisePage = () => {
  const {
    step,
    setStep,
    setFormData,
    formData: { basicDetails },
  } = useFormState();
  const { name } = basicDetails;

  useEffect(() => {
    if (secureLocalStorage.getItem(`onboarding-${name}`)) {
      const onboarding: IFormData & {
        step: number;
      } = JSON.parse(
        (secureLocalStorage.getItem(`onboarding-${name}`) as string) ?? ""
      );

      setStep(EStep.SUMMARY);
      setFormData(onboarding);
    }
  }, [name, setFormData, setStep]);

  switch (step) {
    case EStep.CATEGORY:
      return <Category />;
    case EStep.SUMMARY:
      return <Summary />;
    case EStep.BASIC_DETAILS:
      return <BasicDetails />;
    case EStep.REWARDS:
      return <Rewards />;
    case EStep.TEAM:
      return <Team />;
    case EStep.STORY:
      return <ProjectStory />;
    case EStep.AGREEMENT:
    default:
      return <Agreement />;
  }
};

export default RaisePage;
