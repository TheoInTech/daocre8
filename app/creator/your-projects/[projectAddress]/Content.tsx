"use client";

import { Milestones } from "@/app/creator/your-projects/[projectAddress]/Milestones";
import { Polls } from "@/app/creator/your-projects/[projectAddress]/Polls";
import { useProjectDetailState } from "@/app/creator/your-projects/[projectAddress]/ProjectDetailContext";
import { ProjectDetails } from "@/app/creator/your-projects/[projectAddress]/ProjectDetails";
import { Team } from "@/app/creator/your-projects/[projectAddress]/Team";
import { ESidebar } from "@/lib/schema/creator.schema";
import { cn } from "@/lib/utils/cn";

export const Content = ({ className }: { className?: string }) => {
  const { activeSidebar } = useProjectDetailState();

  let render = null;

  switch (activeSidebar) {
    case ESidebar.TEAM:
      render = <Team />;
      break;
    case ESidebar.MILESTONES:
      render = <Milestones />;
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
