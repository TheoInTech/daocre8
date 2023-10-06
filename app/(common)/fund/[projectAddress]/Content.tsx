"use client";

import { useFundProjectDetailState } from "@/app/(common)/fund/[projectAddress]/FundProjectDetailContext";
import { Milestones } from "@/app/(common)/fund/[projectAddress]/Milestones";
import { ProjectDetails } from "@/app/(common)/fund/[projectAddress]/ProjectDetails";
import { ProjectUpdates } from "@/app/(common)/fund/[projectAddress]/ProjectUpdates";
import { Team } from "@/app/(common)/fund/[projectAddress]/Team";
import { Tiers } from "@/app/(common)/fund/[projectAddress]/Tiers";
import { ETabsForToBeFundedProjects } from "@/lib/types/backer.types";
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
    case ETabsForToBeFundedProjects.TEAM:
      render = <Team />;
      break;
    case ETabsForToBeFundedProjects.UPDATES:
      render = <ProjectUpdates />;
      break;
    case ETabsForToBeFundedProjects.MILESTONES:
      render = <Milestones />;
      break;
    case ETabsForToBeFundedProjects.TIERS:
      render = <Tiers />;
      break;
    case ETabsForToBeFundedProjects.PROJECT_DETAILS:
    default:
      render = <ProjectDetails />;
      break;
  }

  return <div className={cn("card-glass", className)}>{render}</div>;
};
