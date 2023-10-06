"use client";

import { FundConfirmationModal } from "@/app/(common)/fund/[projectAddress]/FundConfirmationModal";
import { useFundProjectDetailState } from "@/app/(common)/fund/[projectAddress]/FundProjectDetailContext";
import { Button } from "@/components/ui/button";
import { ECurrency, IFundingTier } from "@/lib/schema/raise.schema";
import Image from "next/image";
import { useRouter } from "nextjs13-progress";
import { useState } from "react";

export const Tiers = () => {
  const router = useRouter();
  const { tiers, project } = useFundProjectDetailState();
  const currency = project?.project_ipfs_hash.fundingAndMilestones.currency;

  const [activeTier, setActiveTier] = useState<IFundingTier>();
  const [completionModalIsOpen, setCompletionModalIsOpen] =
    useState<boolean>(false);

  const handleClickFund = (tier: IFundingTier) => {
    setActiveTier(tier);
    setCompletionModalIsOpen(true);
  };

  const handleConfirmation = () => {
    alert("Trigger fund transaction on Solana Program");
    router.push("/backed-projects");
  };

  return (
    <>
      <FundConfirmationModal
        isOpen={completionModalIsOpen}
        closeModal={() => setCompletionModalIsOpen(false)}
        onConfirm={handleConfirmation}
        projectName={project?.project_ipfs_hash.basicDetails.name ?? "Project"}
        tierName={activeTier?.name ?? ""}
        amountInUsd={activeTier?.amountInUsd ?? 0}
        currency={currency ?? ECurrency.SOL}
      />
      <div className="flex flex-col">
        {tiers && tiers?.length > 0 ? (
          <div className="flex flex-col gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className="grid grid-cols-3 space-x-8">
                {/* Modal */}

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <Image
                    src={tier.imageUrl}
                    alt={tier.name ?? "Tier"}
                    width={1000}
                    height={1000}
                    className="w-full h-fit rounded-lg shadow-2xl col-span-1"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4 card-glass col-span-1 md:col-span-2">
                  <div className="flex flex-col gap-4">
                    <span className="text-lg font-semibold text-accent">
                      {tier.name}
                    </span>
                    <span className="text-sm whitespace-pre-line">
                      {tier.description}
                    </span>
                  </div>

                  <Button
                    variant={"secondary"}
                    className="justify-self-end w-full"
                    size={"md"}
                    onClick={() => handleClickFund(tier)}
                  >
                    Fund for {tier.amountInUsd.toLocaleString()} USD in{" "}
                    {currency}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <span>No tiers found. Please refresh the page</span>
        )}
      </div>
    </>
  );
};
