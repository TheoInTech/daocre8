"use client";

import { PostUpdateModal } from "@/app/creator/your-projects/[projectAddress]/PostUpdateModal";
import { useProjectDetailState } from "@/app/creator/your-projects/[projectAddress]/ProjectDetailContext";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

export const ProjectUpdates = () => {
  const { updates } = useProjectDetailState();

  const [completionModalIsOpen, setCompletionModalIsOpen] =
    useState<boolean>(false);

  const handleConfirmation = (selectedOption: string) => {
    alert(
      `Trigger save to Arweave and then phantom wallet to post the update: ${selectedOption}`
    );
    setCompletionModalIsOpen(false);
  };

  return (
    <>
      <PostUpdateModal
        isOpen={completionModalIsOpen}
        closeModal={() => setCompletionModalIsOpen(false)}
        onConfirm={handleConfirmation}
      />
      <div className="flex flex-col">
        <Button
          variant={"secondary"}
          size={"md"}
          className="self-end w-auto"
          onClick={() => setCompletionModalIsOpen(true)}
        >
          <Plus className="w-5 h-5 mr-2" /> Post an update
        </Button>
        {updates.length > 0 ? (
          <div className="flex flex-col gap-4">
            {updates.map((update) => (
              <div
                key={update.idx}
                className="flex flex-col gap-2 border-b border-b-muted first:pt-0 py-8"
              >
                <span className="font-semibold text-accent whitespace-pre-line">
                  {update.title}
                </span>
                <span className="whitespace-pre-line">
                  {update.description}
                </span>
              </div>
            ))}
            <span className="text-muted italic text-sm font-semibold">
              -- End of updates --
            </span>
          </div>
        ) : (
          <span>No project updates yet.</span>
        )}
      </div>
    </>
  );
};
