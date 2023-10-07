"use client";

import { useBackedProjectsState } from "@/app/(backer)/backed-projects/BackedProjectsContext";
import { MilestoneConfirmationModal } from "@/app/(backer)/backed-projects/[projectAddress]/MilestoneConfirmationModal";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Detail } from "@/components/ui/detail";
import { IMilestone } from "@/lib/types/milestones.types";
import { format } from "date-fns";
import { useState } from "react";

export const Milestones = () => {
  const { project, milestones, milestonePolls } = useBackedProjectsState();
  const fundingAmount =
    project?.project_ipfs_hash?.fundingAndMilestones?.fundingAmount ?? 0;
  const currency = project?.project_ipfs_hash?.fundingAndMilestones?.currency;
  const walletAddress =
    project?.project_ipfs_hash?.fundingAndMilestones?.walletAddress;
  const initialCapital =
    fundingAmount *
    ((project?.project_ipfs_hash?.fundingAndMilestones?.capitalPercentage ??
      0) /
      100);

  console.log("milestones", milestones);
  console.log("milestonePolls", milestonePolls);

  const [activeMilestone, setActiveMilestone] = useState<IMilestone>();
  const [completionModalIsOpen, setCompletionModalIsOpen] =
    useState<boolean>(false);

  const handleClickMilestone = (milestone: IMilestone) => {
    setActiveMilestone(milestone);
    setCompletionModalIsOpen(true);
  };

  const handleConfirmation = (selectedOption: string) => {
    alert(`Trigger phantom wallet to vote for: ${selectedOption}`);
    setCompletionModalIsOpen(false);
  };

  return (
    <>
      <MilestoneConfirmationModal
        isOpen={completionModalIsOpen}
        closeModal={() => setCompletionModalIsOpen(false)}
        onConfirm={handleConfirmation}
        milestone={activeMilestone ?? ({} as IMilestone)}
      />
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Detail
            title="Total Fundraising Amount"
            value={`${fundingAmount.toLocaleString()} ${currency}`}
          />
          <Detail title="Wallet To Receive" value={walletAddress} />
          <Detail
            title="Initial Distributed Capital"
            value={`${initialCapital.toLocaleString()} ${currency}`}
          />
        </div>
        {milestones?.map((milestone) => {
          const milestonePoll = milestonePolls?.find(
            (poll) =>
              poll.project_dao_id === milestone.project_dao_id &&
              poll.milestone_id === milestone.address
          );
          const hasPollStarted = milestonePoll?.start_datetime
            ? new Date(milestonePoll.start_datetime) < new Date()
            : false;

          return (
            <div key={milestone.idx} className="flex flex-col gap-8 card-glass">
              <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
                <Detail
                  title={<>Milestone {milestone.idx}</>}
                  value={
                    <>
                      {milestone.milestone_ipfs_hash} Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Error unde necessitatibus
                      rerum praesentium explicabo quis vitae temporibus odit
                      accusantium ratione voluptate atque eaque doloremque
                      recusandae, porro at fugit, dicta repellat.
                    </>
                  }
                />
                <Detail
                  title={"Amount to be unlocked"}
                  value={
                    <>
                      {(
                        fundingAmount *
                        (milestone.percentage / 100)
                      ).toLocaleString()}{" "}
                      {
                        project?.project_ipfs_hash?.fundingAndMilestones
                          .currency
                      }
                    </>
                  }
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {milestonePoll?.start_datetime && (
                    <Detail
                      title={"Poll starts in"}
                      value={
                        <CountdownTimer
                          className="font-bold"
                          endTime={milestonePoll?.start_datetime ?? ""}
                          endText={format(
                            new Date(milestonePoll?.start_datetime ?? ""),
                            "dd MMM yyyy HH:mm"
                          )}
                        />
                      }
                    />
                  )}
                  {milestonePoll?.end_datetime && (
                    <Detail
                      title={"Poll ending in"}
                      value={
                        <CountdownTimer
                          className="font-bold"
                          endTime={milestonePoll?.end_datetime ?? ""}
                        />
                      }
                    />
                  )}
                </div>
              </div>
              <Button
                variant="secondary"
                size={"md"}
                className="w-fit"
                disabled={!hasPollStarted}
                onClick={() => handleClickMilestone(milestone)}
              >
                Cast your vote
              </Button>
            </div>
          );
        })}
      </div>
    </>
  );
};
