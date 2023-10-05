"use client";

import { useFundProjectDetailState } from "@/app/(common)/fund/[projectAddress]/FundProjectDetailContext";
import { Milestones } from "@/app/(common)/fund/[projectAddress]/Milestones";
import { Polls } from "@/app/(common)/fund/[projectAddress]/Polls";
import { ProjectDetails } from "@/app/(common)/fund/[projectAddress]/ProjectDetails";
import { ProjectUpdates } from "@/app/(common)/fund/[projectAddress]/ProjectUpdates";
import { Team } from "@/app/(common)/fund/[projectAddress]/Team";
import { Tiers } from "@/app/(common)/fund/[projectAddress]/Tiers";
import { ESidebar } from "@/lib/schema/creator.schema";
import { cn } from "@/lib/utils/cn";

export const Content = ({
  className,
}: {
  className?: string;
  project: any;
}) => {
  const { activeSidebar } = useFundProjectDetailState();

  let render = null;

  switch (activeSidebar) {
    case ESidebar.TEAM:
      render = <Team />;
      break;
    case ESidebar.UPDATES:
      render = <ProjectUpdates />;
      break;
    case ESidebar.MILESTONES:
      render = <Milestones />;
      break;
    case ESidebar.TIERS:
      render = <Tiers />;
      break;
    case ESidebar.POLLS:
      render = <Polls />;
      break;
    case ESidebar.PROJECT_DETAILS:
    default:
      render = <ProjectDetails />;
      break;
  }

  return <div className={cn("card-glass", className)}>{render}</div>;
};
