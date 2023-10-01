"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();

  return (
    <Button
      variant={"outline"}
      size={"sm"}
      className={cn("w-fit bg-background/5 text-muted", className)}
      onClick={() => router.back()}
    >
      <ChevronLeft className="w-5 h-5 mr-2" /> Back
    </Button>
  );
};
