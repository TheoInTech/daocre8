import { useProjectDetailState } from "@/app/creator/your-projects/[projectAddress]/ProjectDetailContext";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Edit, Plus } from "lucide-react";

export const Milestones = () => {
  const { project, milestones, milestonePolls } = useProjectDetailState();
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

  /** TODO:
   * 1. List all milestones (description, amount, status)
   * 2. Ability to initialize the poll for each milestones
   * 3. See the realtime votes for the ongoing poll
   */

  return (
    <div className="flex flex-col gap-8">
      <Button
        variant={"secondary"}
        size={"md"}
        className="self-end w-auto"
        onClick={() => alert("Open modal to create new milestone")}
      >
        <Plus className="w-5 h-5 mr-2" /> Create new milestone
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 card-glass">
        <Button
          variant={"ghost"}
          size={"md"}
          className="self-end w-auto absolute top-0 right-0 shadow-none"
          onClick={() => alert("Open modal to edit funding details")}
        >
          <Edit className="w-8 h-8" />
        </Button>
        <div className="flex flex-col gap-2 ">
          <div className="text-sm font-medium text-primary">
            Total Fundraising Amount
          </div>
          <div className="text-base font-medium">
            {fundingAmount.toLocaleString()} {currency}
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="text-sm font-medium text-primary">
            Wallet To Receive
          </div>
          <div className="text-base font-medium">{walletAddress}</div>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="text-sm font-medium text-primary">
            Initial Distributed Capital
          </div>
          <div className="text-base font-medium">
            {initialCapital.toLocaleString()} {currency}
          </div>
        </div>
      </div>
      {milestones?.map((milestone) => {
        const milestonePoll = milestonePolls?.find(
          (poll) => poll.project_dao_id === milestone.project_dao_id
        );

        return (
          <div
            key={milestone.idx}
            className="grid grid-cols-1 md:grid-cols-3 border-b border-b-muted/20 pb-8 last:border-b-0"
          >
            <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
              <div className="flex flex-col gap-2 ">
                <div className="text-sm font-medium text-primary">
                  Milestone description
                </div>
                <div className="text-base font-medium">
                  {milestone.milestone_ipfs_hash} Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Error unde necessitatibus rerum
                  praesentium explicabo quis vitae temporibus odit accusantium
                  ratione voluptate atque eaque doloremque recusandae, porro at
                  fugit, dicta repellat.
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-primary">
                  Amount to be unlocked
                </div>
                <div className="text-base font-medium">
                  {(
                    fundingAmount *
                    (milestone.percentage / 100)
                  ).toLocaleString()}{" "}
                  {project?.project_ipfs_hash?.fundingAndMilestones.currency}
                </div>
              </div>
            </div>
            {!milestonePoll ? (
              <Button
                className="w-fit h-fit justify-self-end min-w-[14rem]"
                size={"sm"}
                onClick={() =>
                  alert(
                    "Open popup to get more info and initialize milestone poll"
                  )
                }
                disabled
              >
                Start milestone poll
              </Button>
            ) : (
              <div className="flex flex-col gap-4 w-full items-end">
                <div className="flex text-right gap-2">
                  <span className="text-primary font-medium">Ends in</span>
                  <CountdownTimer
                    endTime={milestonePoll.end_datetime}
                    className="font-semibold"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
