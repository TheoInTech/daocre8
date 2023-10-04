"use client";

import { Content } from "@/app/(common)/fund/[projectAddress]/Content";
import { useFundProjectDetailState } from "@/app/(common)/fund/[projectAddress]/FundProjectDetailContext";
import { PageTitle } from "@/app/PageTitle";
import { BackButton } from "@/components/ui/back-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { OptionsTabs } from "@/components/ui/options-tabs";
import { ESidebar } from "@/lib/schema/creator.schema";
import Image from "next/image";

const FundProjectPage = () => {
  const { project, setActiveSidebar, activeSidebar } =
    useFundProjectDetailState();

  return (
    <div className="flex flex-col gap-4 h-full w-full flex-grow min-h-screen">
      <div className="flex flex-col gap-4 mb-8">
        <Breadcrumbs
          links={[
            { href: "/fund", name: "Fund a Project" },
            { name: project?.project_ipfs_hash?.basicDetails.name ?? "" },
          ]}
        />
        <BackButton href="/fund" />
      </div>

      <PageTitle
        title={
          project?.project_ipfs_hash?.basicDetails.name ?? "Project not found"
        }
        subtitle={
          <>
            <span className="font-semibold capitalize text-gradient-violet">
              {project?.project_ipfs_hash?.category?.toLocaleLowerCase()}
            </span>{" "}
            category
          </>
        }
      />

      <div className="grid grid-cols-3 my-4 space-x-8">
        <div className="flex flex-col gap-8">
          <Image
            src={project?.project_ipfs_hash?.basicDetails.imageUrl}
            alt={project?.project_ipfs_hash?.basicDetails.name ?? "Project"}
            width={1000}
            height={1000}
            className="w-full h-fit rounded-lg shadow-2xl col-span-1"
          />
          <Button onClick={() => setActiveSidebar(ESidebar.TIERS)}>
            Fund this project
          </Button>
        </div>
        <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
          <OptionsTabs
            handleCurrentTab={setActiveSidebar}
            currentTab={activeSidebar}
            options={Object.entries(ESidebar)}
          />
          <Content project={project} />
        </div>
      </div>
    </div>
  );
};

export default FundProjectPage;
