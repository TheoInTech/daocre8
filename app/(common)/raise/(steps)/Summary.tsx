import { FormButtons } from "@/common/raise/FormButtons";
import { useFormState } from "@/common/raise/FormContext";
import { SummaryTitle } from "@/common/raise/SummaryTitle";
import { Button } from "@/components/ui/button";
import { EStep } from "@/lib/schema/raise.schema";
import { TCompletion } from "@/lib/types/raise.types";
import { cn } from "@/lib/utils/cn";
import { CheckCircle, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CompletionModal } from "../CompletionModal";

const summaryButtons = [
  { label: "1 | Basic Details", step: EStep.BASIC_DETAILS },
  { label: "2 | Rewards", step: EStep.REWARDS },
  { label: "3 | The Team", step: EStep.TEAM },
  // { label: "4 | Project Story", step: EStep.STORY },
  { label: "4 | Funding & Milestones", step: EStep.MILESTONES },
];

export const Summary = () => {
  const { setStep, completion } = useFormState();
  const [completionModalIsOpen, setCompletionModalIsOpen] =
    useState<boolean>(false);

  const handleConfirmation = () => {
    alert("confirmed");
  };

  return (
    <>
      <CompletionModal
        isOpen={completionModalIsOpen}
        closeModal={() => setCompletionModalIsOpen(false)}
        onConfirm={handleConfirmation}
      />
      <div className="flex flex-col gap-4 items-start justify-center h-full flex-grow w-full">
        <SummaryTitle />
        <div className="grid grid-rows-4 py-4 md:grid-rows-2 md:grid-cols-2 grid-flow-col gap-8 w-full">
          {summaryButtons.map(({ label, step }) => (
            <div
              key={label}
              className="flex items-center justify-between w-full gap-4"
            >
              <Button
                variant={"default"}
                onClick={() => setStep(step)}
                className="w-full flex justify-between p-4"
              >
                {label}
                <ChevronRight className="w-4 h-4" />
              </Button>
              <CheckCircle
                className={cn(
                  "w-12 h-12",
                  completion[step as keyof TCompletion]
                    ? "text-success"
                    : "text-gray-300"
                )}
              />
            </div>
          ))}
        </div>
        <FormButtons onSubmit={() => setCompletionModalIsOpen(true)} />
      </div>
    </>
  );
};
