"use client";

// packages
import { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
// raise
import { Agreement } from "@/app/raise/Agreement";
import { useFormState } from "@/app/raise/FormContext";
// types
import { Category } from "@/app/raise/Category";
import { EStep, IFormData } from "@/lib/types/raise.type";

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
    case EStep.AGREEMENT:
    default:
      return <Agreement />;
  }
};

export default RaisePage;
