"use client";

// packages
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
// raise
import { Agreement } from "@/common/raise/(steps)/Agreement";
import { BasicDetails } from "@/common/raise/(steps)/BasicDetails";
import { Category } from "@/common/raise/(steps)/Category";
import { FundingAndMilestones } from "@/common/raise/(steps)/FundingAndMilestones";
import { Rewards } from "@/common/raise/(steps)/Rewards";
import { Summary } from "@/common/raise/(steps)/Summary";
import { Team } from "@/common/raise/(steps)/Team";
import { useFormState } from "@/common/raise/FormContext";
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
    // case EStep.STORY:
    //   return <ProjectStory />;
    case EStep.MILESTONES:
      return <FundingAndMilestones />;
    case EStep.AGREEMENT:
    default:
      return <Agreement />;
  }
};

export default RaisePage;
