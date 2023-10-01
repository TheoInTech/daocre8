"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  endTime: string;
  className?: string;
}

export const CountdownTimer = ({ endTime, className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const end = new Date(endTime).getTime();
      const distance = end - now;

      if (distance < 0) {
        clearInterval(intervalId);
        setTimeLeft("Ended");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endTime]);

  return <div className={className}>{timeLeft}</div>;
};
