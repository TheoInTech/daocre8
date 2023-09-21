"use client";

import { useFormState } from "@/app/raise/FormContext";
import { Button } from "@/components/ui/button";
import { EStep } from "@/lib/types/raise.type";

type FormButtonsVariant = "none" | "both" | "submit-only";
interface IFormButtons {
  variant?: FormButtonsVariant;
  onBack?: () => void;
  onSubmit?: () => void;
  backText?: string;
  submitText?: string;
  isLoading?: boolean;
  isSubmitDisabled?: boolean;
}

export const FormButtons = ({
  variant = "both",
  onBack,
  onSubmit,
  backText = "Back",
  submitText = "Next",
  isSubmitDisabled = false,
}: IFormButtons) => {
  const { handleBack, setStep } = useFormState();

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      handleBack();
    }
  };

  const handleSubmitClick = () => {
    if (onSubmit) {
      onSubmit();
    } else {
      setStep(EStep.SUMMARY);
    }
  };

  switch (variant) {
    case "none":
      return <></>;
    case "submit-only":
      return (
        <div className="flex items-center justify-center w-full gap-2 my-4 sm:gap-4">
          <Button
            onClick={handleSubmitClick}
            type="submit"
            disabled={isSubmitDisabled}
          >
            {submitText}
          </Button>
        </div>
      );
    case "both":
    default:
      return (
        <div className="flex items-center justify-center w-full my-4 gap-x-4">
          <Button onClick={handleBackClick} variant={"outline"}>
            {backText}
          </Button>
          <Button
            onClick={handleSubmitClick}
            type="submit"
            disabled={isSubmitDisabled}
          >
            {submitText}
          </Button>
        </div>
      );
  }
};
