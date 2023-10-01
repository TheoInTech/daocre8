import { CreatorSections } from "@/app/creator/(creator-profile)/CreatorSections";
import { mockProjectsData } from "@/lib/mock";
import { ECurrency } from "@/lib/schema/raise.schema";

export const CreatorSummary = () => {
  const totalProjects = mockProjectsData.length;
  const totalFundingSOL = mockProjectsData.reduce(
    (total, val) =>
      val.project_ipfs_hash.fundingAndMilestones.currency === ECurrency.SOL
        ? total + val.balance
        : total,
    0
  );
  const totalFundingUSDC = mockProjectsData.reduce(
    (total, val) =>
      val.project_ipfs_hash.fundingAndMilestones.currency === ECurrency.USDC
        ? total + val.balance
        : total,
    0
  );
  const totalFundingUSDT = mockProjectsData.reduce(
    (total, val) =>
      val.project_ipfs_hash.fundingAndMilestones.currency === ECurrency.USDT
        ? total + val.balance
        : total,
    0
  );
  const totalFundingUSD = mockProjectsData.reduce(
    (total, val) =>
      val.project_ipfs_hash.fundingAndMilestones.currency === ECurrency.USD
        ? total + val.balance
        : total,
    0
  );
  const categories = mockProjectsData.map(
    (val) => val.project_ipfs_hash.category
  );

  return (
    <CreatorSections title="Creator Summary">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-semibold  text-accent">Total projects</span>
          <span>{totalProjects}</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-accent">Category diversity</span>
          <span>{categories.join(", ")}</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold  text-accent">
            Total funding acquired
          </span>
          <div className="w-2/3 md:w-1/3 flex flex-col gap-2">
            <span className="flex justify-between">
              {ECurrency.SOL} : <span>{totalFundingSOL.toLocaleString()}</span>
            </span>
            <span className="flex justify-between">
              {ECurrency.USDC} :{" "}
              <span>{totalFundingUSDC.toLocaleString()}</span>
            </span>
            <span className="flex justify-between">
              {ECurrency.USDT} :{" "}
              <span>{totalFundingUSDT.toLocaleString()}</span>
            </span>
            <span className="flex justify-between">
              {ECurrency.USD} : <span>{totalFundingUSD.toLocaleString()}</span>
            </span>
          </div>
        </div>
      </div>
    </CreatorSections>
  );
};
