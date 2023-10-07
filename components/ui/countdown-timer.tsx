"use client";

import { useCallback, useEffect, useState } from "react";

interface CountdownTimerProps {
  endTime: string;
  endText?: string;
  className?: string;
}

export const CountdownTimer = ({
  endTime,
  endText,
  className,
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<string>("");

  const updateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const end = new Date(endTime).getTime();
    const distance = end - now;

    if (distance < 0) {
      setTimeLeft(endText ?? "Ended");
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
  }, [endTime, endText, setTimeLeft]);

  useEffect(() => {
    updateTimeLeft();
    const intervalId = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(intervalId);
  }, [updateTimeLeft]);

  return <div className={className}>{timeLeft}</div>;
};
