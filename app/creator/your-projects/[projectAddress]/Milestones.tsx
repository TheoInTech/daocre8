import { useProjectDetailState } from "@/app/creator/your-projects/[projectAddress]/ProjectDetailContext";

export const Milestones = () => {
  const { project } = useProjectDetailState();
  const milestones = project?.project_ipfs_hash.fundingAndMilestones.milestones;

  /** TODO:
   * 1. List all milestones
   * 2. Ability to start the poll for each milestones
   * 3. See the realtime votes for the ongoing poll
   */

  return <div>Milestones</div>;
};
