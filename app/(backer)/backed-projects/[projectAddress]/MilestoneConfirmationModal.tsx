"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IMilestone } from "@/lib/types/milestones.types";
import { useState } from "react";

export const MilestoneConfirmationModal = ({
  isOpen,
  closeModal,
  onConfirm,
  milestone,
}: {
  isOpen: boolean;
  closeModal: () => void;
  onConfirm: (selectedOption: string) => void;
  milestone: IMilestone;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col gap-2 pb-2 text-xl font-semibold text-gradient-violet">
            Do you agree that this milestone has been achieved?
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4 pt-4 border-t border-t-border ">
            <div>{milestone.milestone_ipfs_hash}</div>

            <RadioGroup
              defaultValue="comfortable"
              onValueChange={setSelectedOption}
            >
              <div className="flex items-center space-x-2 text-foreground">
                <RadioGroupItem
                  value={"true"}
                  id={"true"}
                  className="border-black"
                />
                <Label htmlFor="r1">
                  Yes, I agree that the project achieved this milestone.
                </Label>
              </div>
              <div className="flex items-center space-x-2 text-foreground">
                <RadioGroupItem
                  value={"false"}
                  id={"false"}
                  className="border-black"
                />
                <Label htmlFor="r1">
                  No, I believe the project did&apos;nt achieve this milestone.
                </Label>
              </div>
            </RadioGroup>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={!selectedOption}
            onClick={() => onConfirm(selectedOption)}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
