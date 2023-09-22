import { cn } from "@/lib/utils";
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
    const result = Math.max(totalSteps, Math.floor(progress / totalSteps) * 10);
    const finalResult = result >= 100 ? 100 : result;

    setWidth(finalResult);

    console.log("currentStep", currentStep);
    console.log("totalSteps", totalSteps);
  }, [currentStep, totalSteps]);

  return (
    <div
      className={cn("h-1 absolute top-0 left-0 right-0 bg-secondary z-[999]")}
      style={{ width: `${width}%` }}
    ></div>
  );
};
