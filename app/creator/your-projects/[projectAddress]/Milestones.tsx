import { useProjectDetailState } from "@/app/creator/your-projects/[projectAddress]/ProjectDetailContext";

export const Milestones = () => {
  const { project } = useProjectDetailState();
  const milestones =
    project?.project_ipfs_hash?.fundingAndMilestones?.milestones;
  const fundingAmount =
    project?.project_ipfs_hash?.fundingAndMilestones?.fundingAmount ?? 0;

  /** TODO:
   * 1. List all milestones (description, amount, status)
   * 2. Ability to initialize the poll for each milestones
   * 3. See the realtime votes for the ongoing poll
   */

  return (
    <div className="flex flex-col gap-8">
      {milestones?.map((milestone) => (
        <div key={milestone.description} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium text-primary">Description</div>
            <div className="text-base font-medium">{milestone.description}</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-medium text-primary">Amount</div>
            <div className="text-base font-medium">
              {fundingAmount * (milestone.percentage / 100)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
