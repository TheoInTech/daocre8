import { useBackedProjectsState } from "@/app/(backer)/backed-projects/BackedProjectsContext";
import { PollConfirmationModal } from "@/app/(backer)/backed-projects/[projectAddress]/PollConfirmationModal";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Detail } from "@/components/ui/detail";
import { IDecisionMakingPoll } from "@/lib/types/polls.types";
import { format } from "date-fns";
import { useState } from "react";

const VoteMapping = () => {};

export const Polls = () => {
  const { changePolls } = useBackedProjectsState();

  const [activePoll, setActivePoll] = useState<IDecisionMakingPoll>();
  const [completionModalIsOpen, setCompletionModalIsOpen] =
    useState<boolean>(false);

  const handleClickPoll = (poll: IDecisionMakingPoll) => {
    setActivePoll(poll);
    setCompletionModalIsOpen(true);
  };

  const handleConfirmation = (selectedOption: string) => {
    alert(`Trigger phantom wallet to vote for: ${selectedOption}`);
    setCompletionModalIsOpen(false);
  };

  return (
    <>
      <PollConfirmationModal
        isOpen={completionModalIsOpen}
        closeModal={() => setCompletionModalIsOpen(false)}
        onConfirm={handleConfirmation}
        question={activePoll?.question ?? ""}
        options={activePoll?.options ?? []}
      />
      <div className="flex flex-col gap-8">
        {changePolls.length > 0 ? (
          changePolls?.map((poll) => {
            const hasPollStarted = new Date(poll.start_datetime) < new Date();

            return (
              <div
                key={poll.idx}
                className="card-glass grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <Detail
                  title={"Poll starts in"}
                  value={
                    <CountdownTimer
                      className="font-bold"
                      endTime={poll.start_datetime}
                      endText={format(
                        new Date(poll.start_datetime),
                        "dd MMM yyyy HH:mm"
                      )}
                    />
                  }
                />
                <Detail
                  title={"Poll ending in"}
                  value={
                    <CountdownTimer
                      className="font-bold"
                      endTime={poll.end_datetime}
                    />
                  }
                />
                <Detail
                  title={"Poll question"}
                  value={poll.question}
                  className="col-span-1 md:col-span-2"
                />
                <Detail
                  title={"Answer options"}
                  value={
                    <ul>
                      {poll.options.map((option) => (
                        <li key={option} className="list-disc list-inside">
                          {option}
                        </li>
                      ))}
                    </ul>
                  }
                  className="col-span-1 md:col-span-2"
                />
                <Button
                  variant="secondary"
                  size={"md"}
                  className="w-fit"
                  disabled={!hasPollStarted}
                  onClick={() => handleClickPoll(poll)}
                >
                  Cast your vote
                </Button>
              </div>
            );
          })
        ) : (
          <span>No polls yet.</span>
        )}
      </div>
    </>
  );
};
