import { useFundProjectDetailState } from "@/app/(common)/fund/[projectAddress]/FundProjectDetailContext";
import { Detail } from "@/components/ui/detail";

export const Milestones = () => {
  const { project, milestones } = useFundProjectDetailState();
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 card-glass">
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
      {milestones?.map((milestone) => (
        <div
          key={milestone.idx}
          className="flex flex-col border-b border-b-muted/20 pb-8 last:border-b-0"
        >
          <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
            <Detail
              title={<>Milestone {milestone.idx}</>}
              value={
                <>
                  {milestone.milestone_ipfs_hash} Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Error unde necessitatibus rerum
                  praesentium explicabo quis vitae temporibus odit accusantium
                  ratione voluptate atque eaque doloremque recusandae, porro at
                  fugit, dicta repellat.
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
                  {project?.project_ipfs_hash?.fundingAndMilestones.currency}
                </>
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};
