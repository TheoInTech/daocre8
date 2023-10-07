"use client";

import { useBackedProjectsState } from "@/app/(backer)/backed-projects/BackedProjectsContext";
import { Button } from "@/components/ui/button";
import { ETabsForBackedProjects } from "@/lib/types/backer.types";
import { cn } from "@/lib/utils/cn";
import { ChevronRight } from "lucide-react";

export const Sidebar = ({ className }: { className?: string }) => {
  const { activeSidebar, setActiveSidebar } = useBackedProjectsState();
  const sidebarOptions = Object.entries(ETabsForBackedProjects);

  return (
    <div
      className={cn(
        "flex flex-col gap-8 border-r border-r-muted/20 py-8 px-4 card-glass h-fit",
        className
      )}
    >
      {sidebarOptions.map(([key, value]) => (
        <Button
          key={key}
          variant={"ghost"}
          className={cn(
            "shadow-none p-0 flex justify-between items-center",
            activeSidebar === value && "text-accent font-medium brightness-200"
          )}
          disabled={activeSidebar === value}
          onClick={() => setActiveSidebar(value)}
        >
          {value} <ChevronRight className={"w-5 h-5"} />
        </Button>
      ))}
    </div>
  );
};
