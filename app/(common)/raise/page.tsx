"use client";

// packages
// raise
import { Agreement } from "@/common/raise/(steps)/Agreement";
import { BasicDetails } from "@/common/raise/(steps)/BasicDetails";
import { Category } from "@/common/raise/(steps)/Category";
import { Final } from "@/common/raise/(steps)/Final";
import { FundingAndMilestones } from "@/common/raise/(steps)/FundingAndMilestones";
import { Rewards } from "@/common/raise/(steps)/Rewards";
import { Summary } from "@/common/raise/(steps)/Summary";
import { Team } from "@/common/raise/(steps)/Team";
import { useFormState } from "@/common/raise/FormContext";
// types
import { EStep } from "@/lib/schema/raise.schema";

const RaisePage = () => {
  const { step } = useFormState();

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
    case EStep.MILESTONES:
      return <FundingAndMilestones />;
    case EStep.FINAL:
      return <Final />;
    case EStep.AGREEMENT:
    default:
      return <Agreement />;
  }
};

export default RaisePage;
