import { useProjectDetailState } from "@/app/creator/your-projects/[projectAddress]/ProjectDetailContext";
import { Button } from "@/components/ui/button";

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
        <div
          key={milestone.description}
          className="grid grid-cols-1 md:grid-cols-3 border-b border-b-muted/20 pb-8 last:border-b-0"
        >
          <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
            <div className="flex flex-col gap-2 ">
              <div className="text-sm font-medium text-primary">
                Milestone description
              </div>
              <div className="text-base font-medium">
                {milestone.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Error unde necessitatibus rerum praesentium
                explicabo quis vitae temporibus odit accusantium ratione
                voluptate atque eaque doloremque recusandae, porro at fugit,
                dicta repellat.
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-primary">
                Amount to unlock
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
          <Button className="w-fit h-fit justify-self-end" size={"sm"}>
            Start milestone poll
          </Button>
        </div>
      ))}
    </div>
  );
};
