import { Separator } from "@/components/ui/separator";

interface ICreatorTitle {
  title: string;
  subtitle: string;
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
