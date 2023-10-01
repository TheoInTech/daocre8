import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface ICreatorTitle {
  title: ReactNode;
  subtitle: ReactNode;
}

export const CreatorTitle = ({ title, subtitle }: ICreatorTitle) => {
  return (
    <>
      <h4 className="font-semibold text-4xl text-gradient-primary">{title}</h4>
      <h5 className="text-xl">{subtitle}</h5>
      <Separator />
    </>
  );
};
