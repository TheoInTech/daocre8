"use client";

import { useBackedProjectsState } from "@/app/(backer)/backed-projects/BackedProjectsContext";
import { Milestones } from "@/app/(backer)/backed-projects/[projectAddress]/Milestones";
import { Polls } from "@/app/(backer)/backed-projects/[projectAddress]/Polls";
import { ProjectDetails } from "@/app/(backer)/backed-projects/[projectAddress]/ProjectDetails";
import { ProjectUpdates } from "@/app/(backer)/backed-projects/[projectAddress]/ProjectUpdates";
import { Team } from "@/app/(backer)/backed-projects/[projectAddress]/Team";
import { Tiers } from "@/app/(backer)/backed-projects/[projectAddress]/Tiers";
import { ETabsForBackedProjects } from "@/lib/types/backer.types";
import { cn } from "@/lib/utils/cn";

export const Content = ({
  className,
}: {
  className?: string;
  project: any;
}) => {
  const { activeSidebar } = useBackedProjectsState();

  let render = null;

  switch (activeSidebar) {
    case ETabsForBackedProjects.TEAM:
      render = <Team />;
      break;
    case ETabsForBackedProjects.UPDATES:
      render = <ProjectUpdates />;
      break;
    case ETabsForBackedProjects.MILESTONES:
      render = <Milestones />;
      break;
    case ETabsForBackedProjects.TIERS:
      render = <Tiers />;
      break;
    case ETabsForBackedProjects.POLLS:
      render = <Polls />;
      break;
    case ETabsForBackedProjects.PROJECT_DETAILS:
    default:
      render = <ProjectDetails />;
      break;
  }

  return <div className={cn("card-glass", className)}>{render}</div>;
};
