"use client";

// packages
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
// raise
import { Agreement } from "@/app/raise/Agreement";
import { BasicDetails } from "@/app/raise/BasicDetails";
import { Category } from "@/app/raise/Category";
import { useFormState } from "@/app/raise/FormContext";
import { Summary } from "@/app/raise/Summary";
// types
import { EStep, IFormData } from "@/lib/schema/basic-details.schema";

const RaisePage = () => {
  const { step, setStep, setFormData, formData } = useFormState();

  useEffect(() => {
    if (secureLocalStorage.getItem(`onboarding-${formData.name}`)) {
      const onboarding: IFormData & {
        step: number;
      } = JSON.parse(
        (secureLocalStorage.getItem(`onboarding-${formData.name}`) as string) ??
          ""
      );

      setStep(EStep.SUMMARY);
      setFormData(onboarding);
    }
  }, [formData.name, setFormData, setStep]);

  switch (step) {
    case EStep.CATEGORY:
      return <Category />;
    case EStep.SUMMARY:
      return <Summary />;
    case EStep.BASIC_DETAILS:
      return <BasicDetails />;
    case EStep.AGREEMENT:
    default:
      return <Agreement />;
  }
};

export default RaisePage;
