"use client";

import { useFormState } from "@/common/raise/FormContext";
import { Button } from "@/components/ui/button";
import { MultistepProgress } from "@/components/ui/multistep-progress";
import { EStep } from "@/lib/schema/raise.schema";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export const FormButtons = ({
  disabled = false,
  onSubmit,
}: {
  disabled?: boolean;
  onSubmit: any;
}) => {
  const { setStep, step, completion } = useFormState();
  const router = useRouter();

  const handleBack = () => {
    if (step === EStep.AGREEMENT) {
      router.push("/");
    } else if (step === EStep.CATEGORY) {
      setStep(EStep.AGREEMENT);
    } else if (step === EStep.SUMMARY) {
      setStep(EStep.CATEGORY);
    } else {
      setStep(EStep.SUMMARY);
    }
  };

  let render;

  switch (step) {
    case EStep.AGREEMENT:
    case EStep.CATEGORY:
      render = (
        <>
          <Button onClick={handleBack} variant={"outline"} size={"md"}>
            <ChevronLeft className="w-5 h-5 mr-4" />
            Back
          </Button>
          <Button onClick={onSubmit} disabled={disabled} size={"md"}>
            {step === EStep.AGREEMENT && "Agree"}
            {step === EStep.CATEGORY && "Next"}
            <ChevronRight className="w-5 h-5 ml-4" />
          </Button>
        </>
      );
      break;
    case EStep.BASIC_DETAILS:
    case EStep.MILESTONES:
    case EStep.REWARDS:
    // case EStep.STORY:
    case EStep.TEAM:
      render = (
        <>
          <Button onClick={handleBack} variant={"outline"} size={"md"}>
            <ChevronLeft className="w-5 h-5 mr-4" /> Back
          </Button>
          <Button
            onClick={onSubmit}
            type="submit"
            disabled={disabled}
            size={"md"}
          >
            Save
            <ChevronRight className="w-5 h-5 ml-4" />
          </Button>
        </>
      );
      break;
    case EStep.SUMMARY:
    default:
      render = (
        <>
          <Button onClick={handleBack} variant={"outline"} size={"md"}>
            <ChevronLeft className="w-5 h-5 mr-4" /> Back
          </Button>
          {Object.values(completion).filter(Boolean).length ===
            Object.keys(completion).length && (
            <Button
              onClick={onSubmit}
              type="submit"
              disabled={disabled}
              size={"md"}
            >
              Complete
              <ChevronRight className="w-5 h-5 ml-4" />
            </Button>
          )}
        </>
      );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 px-8 md:px-16 py-4 border border-t-border flex items-center justify-between w-full gap-4 md:gap-8 z-50 backdrop-blur-sm bg-black bg-opacity-40 shadow-2xl">
      <MultistepProgress
        currentStep={Object.values(completion).filter(Boolean).length}
        totalSteps={Object.keys(completion).length}
      />
      {render}
    </div>
  );
};
