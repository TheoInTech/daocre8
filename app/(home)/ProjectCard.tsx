import { ECurrency } from "@/lib/schema/raise.schema";
import Image from "next/image";
import { Link } from "nextjs13-progress";

interface IProjectCard {
  address: string;
  imageUrl: string;
  title: string;
  fundraised: number;
  currency: ECurrency;
}

export const ProjectCard = ({
  address,
  imageUrl,
  title,
  fundraised,
  currency,
}: IProjectCard) => {
  return (
    <Link
      href={`/fund/${address}`}
      className="hover:h-full hover:shadow-2xl hover:brightness-110 duration-300 ease-in-out"
    >
      <li className="relative max-w-none overflow-hidden card-glass p-4">
        <Image
          src={imageUrl}
          alt={title}
          width={1000}
          height={1000}
          className="w-[20rem] h-[20rem] rounded-xl object-cover"
          placeholder="blur"
          blurDataURL="/assets/nft-sample.png"
          priority
        />
        <div className="relative p-4">
          <div className="flex flex-col absolute bottom-0 left-0 right-0 p-4 rounded-b-xl card-glass bg-black/80 overflow-hidden">
            <div className="font-bold truncate text-gradient-yellow w-full text-base">
              {title}
            </div>
            <div className="font-medium text-muted text-sm">
              Raised {fundraised.toLocaleString()} {currency}
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};
