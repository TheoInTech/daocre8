import { ECurrency } from "@/lib/schema/raise.schema";
import Image from "next/image";

interface IProjectCard {
  imageUrl: string;
  title: string;
  fundraised: number;
  currency: ECurrency;
}

export const ProjectCard = ({
  imageUrl,
  title,
  fundraised,
  currency,
}: IProjectCard) => {
  return (
    <li className="relative w-full max-w-none">
      <Image
        src={imageUrl}
        alt={title}
        width={1000}
        height={1000}
        className="w-[20rem] h-[20rem] rounded-xl object-cover"
      />
      <div className="flex flex-col absolute bottom-0 p-4 rounded-b-xl card-glass bg-black/80 w-full">
        <div className="font-bold truncate text-gradient-yellow w-full text-base">
          {title}
        </div>
        <div className="font-medium text-muted text-sm">
          Raised {fundraised.toLocaleString()} {currency}
        </div>
      </div>
    </li>
  );
};
