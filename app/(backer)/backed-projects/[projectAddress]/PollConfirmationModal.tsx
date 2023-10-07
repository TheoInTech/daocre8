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
import { useState } from "react";

export const PollConfirmationModal = ({
  isOpen,
  closeModal,
  onConfirm,
  question,
  options,
}: {
  isOpen: boolean;
  closeModal: () => void;
  onConfirm: (selectedOption: string) => void;
  question: string;
  options: Array<string>;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex flex-col gap-2 pb-2 text-xl font-semibold text-gradient-violet">
            {question}
          </AlertDialogTitle>
          <AlertDialogDescription className="flex flex-col gap-4 pt-4 border-t border-t-border ">
            <RadioGroup
              defaultValue="comfortable"
              onValueChange={setSelectedOption}
            >
              {options.map((option) => (
                <div
                  key={option}
                  className="flex items-center space-x-2 text-foreground"
                >
                  <RadioGroupItem
                    value={option}
                    id={option}
                    className="border-black"
                  />
                  <Label htmlFor="r1">{option}</Label>
                </div>
              ))}
            </RadioGroup>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeModal}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onConfirm(selectedOption)}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
