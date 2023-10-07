import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface IDetail {
  title: ReactNode;
  value: ReactNode;
  className?: string;
}

export const Detail = ({ title, value, className }: IDetail) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="font-semibold text-accent">{title}</div>
      <div className="text-base font-medium whitespace-pre-line">{value}</div>
    </div>
  );
};
