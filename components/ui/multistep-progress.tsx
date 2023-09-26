import { cn } from "@/lib/utils/cn";
import { useEffect, useState } from "react";

interface IMultistepProgress {
  currentStep: number;
  totalSteps: number;
}

export const MultistepProgress = ({
  currentStep,
  totalSteps,
}: IMultistepProgress) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const progress = Math.ceil((100 / totalSteps) * currentStep);
    const result = Math.max(10, Math.floor(progress / 10) * 10);
    const finalResult = result >= 100 ? 100 : result;

    setWidth(finalResult);
  }, [currentStep, totalSteps]);

  return (
    <div
      className={cn("h-1 absolute top-0 left-0 right-0 bg-primary z-[999]")}
      style={{ width: `${width}%` }}
    ></div>
  );
};
