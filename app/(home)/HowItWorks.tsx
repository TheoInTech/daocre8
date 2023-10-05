"use client";

import { Section } from "@/app/(home)/Section";
import { OptionsTabs } from "@/components/ui/options-tabs";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { useState } from "react";

enum ETab {
  CREATOR = "Creator",
  BACKER = "Backer",
}

const creatorInstruction = [
  {
    id: 1,
    title: "Create and Manage a Project",
    description: `After logging in, click "Create Project," fill in project details, submit for approval, and manage it from your Creator Dashboard.`,
    imageUrl: "/assets/how-it-works/creator-create_a_project.png",
  },
  {
    id: 2,
    title: "Funding Monitoring",
    description: `Access your Creator Dashboard to monitor real-time funding progress and keep backers informed with milestone and poll updates.`,
    imageUrl: "/assets/how-it-works/creator-funding_monitoring.png",
  },
  {
    id: 3,
    title: "Creator Profile Dashboard",
    description:
      "Monitor your projects' AI-powered insights, analytics, funding and more.",
    imageUrl: "/assets/how-it-works/creator-profile.png",
  },
  {
    id: 4,
    title: "Manage Milestones & Polls",
    description:
      "Define milestones, update them, and create polls to engage backers in project decisions.",
    imageUrl: "/assets/how-it-works/creator-manage_milestone_polls.png",
  },
];

const backerInstruction = [
  {
    id: 1,
    title: "Fund a Project",
    description:
      "Sign in, choose a project, select a funding tier, and confirm payment to receive your membership NFT based on your funding tier.",
    imageUrl: "/assets/how-it-works/backer-fund_a_project.png",
  },
  {
    id: 2,
    title: "Poll Voting",
    description:
      "Participate in project-related polls, vote for your preferred options, and contribute to project decisions through decentralized governance.",
    imageUrl: "/assets/how-it-works/backer-poll_voting.png",
  },
];

const SectionHowItWorks = () => {
  const [activeInstruction, setActiveInstruction] = useState(
    creatorInstruction[0]
  );

  const [currentTab, setCurrentTab] = useState<ETab>(ETab.CREATOR);

  const handleChangeTab = (tab: ETab) => {
    setCurrentTab(tab);
    setActiveInstruction(
      tab === ETab.CREATOR ? creatorInstruction[0] : backerInstruction[0]
    );
  };

  return (
    <Section
      id={"section-how"}
      title={"How It Works"}
      description={"Easily Create, Back Projects"}
      containerClassName="max-w-[95%] md:max-w-[90%] 2xl:max-w-[90%]"
    >
      <OptionsTabs
        handleCurrentTab={handleChangeTab}
        currentTab={currentTab}
        options={Object.entries(ETab)}
        className="w-auto px-8"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="card-glass p-4 h-fit">
          <Image
            src={activeInstruction.imageUrl}
            alt={activeInstruction.title}
            width={1920}
            height={1080}
            className="rounded-xl object-cover"
            placeholder="blur"
            blurDataURL="/assets/nft-sample.png"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          {currentTab === ETab.CREATOR
            ? creatorInstruction.map((instruction) => (
                <div
                  key={instruction.id}
                  className={cn(
                    "flex gap-4 hover:bg-muted/5 cursor-pointer p-8 rounded-lg duration-300 ease-in-out box-border",
                    instruction.id === activeInstruction.id && "card-glass"
                  )}
                  onClick={() => setActiveInstruction(instruction)}
                >
                  <div>
                    <span className="px-4 py-2 font-semibold text-2xl rounded-[100%] primary-gradient text-muted">
                      {instruction.id}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="text-lg font-semibold">
                      {instruction.title}
                    </span>
                    <span className="text-sm">{instruction.description}</span>
                  </div>
                </div>
              ))
            : backerInstruction.map((instruction) => (
                <div
                  key={instruction.id}
                  className={cn(
                    "flex gap-4 hover:border hover:border-border cursor-pointer p-8",
                    instruction.id === activeInstruction.id && "card-glass"
                  )}
                  onClick={() => setActiveInstruction(instruction)}
                >
                  <div>
                    <span className="px-4 py-2 font-semibold text-2xl rounded-[100%] primary-gradient text-muted">
                      {instruction.id}
                    </span>
                  </div>
                  <div className="flex flex-col gap-4">
                    <span className="text-lg font-semibold">
                      {instruction.title}
                    </span>
                    <span className="text-sm">{instruction.description}</span>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </Section>
  );
};

export default SectionHowItWorks;
