"use client";

import { useProjectDetailState } from "@/app/creator/your-projects/[projectAddress]/ProjectDetailContext";
import { Button } from "@/components/ui/button";
import { ESidebar } from "@/lib/types/creator.types";
import { cn } from "@/lib/utils/cn";
import { ChevronRight } from "lucide-react";

export const Sidebar = ({ className }: { className?: string }) => {
  const { activeSidebar, setActiveSidebar } = useProjectDetailState();
  const sidebarOptions = Object.entries(ESidebar);

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
            activeSidebar === value &&
              "text-primary font-medium disabled:opacity-100"
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
