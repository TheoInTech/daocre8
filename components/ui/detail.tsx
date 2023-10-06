import { ReactNode } from "react";

interface IDetail {
  title: ReactNode;
  value: ReactNode;
}

export const Detail = ({ title, value }: IDetail) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold text-accent">{title}</div>
      <div className="text-base font-medium whitespace-pre-line">{value}</div>
    </div>
  );
};
