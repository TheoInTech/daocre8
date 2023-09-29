import { SummaryTitle } from "@/common/raise/SummaryTitle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const Final = () => {
  return (
    <div className="flex flex-col gap-4 h-full flex-grow w-full">
      <SummaryTitle />

      <div className="flex gap-8 w-full items-center justify-center my-4">
        <Image
          src={"/assets/nft-sample.png"}
          alt={"DAOCre-8 Creator NFT"}
          width={1000}
          height={1000}
          className="shadow-lg rounded-lg w-80 h-80"
        />
        <div className="flex flex-col justify-center items-center gap-8 text-center">
          <p className="text-xl text-gradient-yellow font-medium">
            Thank you for submitting your project!
          </p>
          <p className="text-xl max-w-[32rem]">
            Here&apos;s your{" "}
            <span className="text-gradient-blue font-medium">
              Creator Badge
            </span>{" "}
            that will give you access to your project&apos;s dashboard, funding
            monitoring, milestones, creator events and more!
          </p>
          <Button asChild className="my-4">
            <Link href={"/creator"}>Go to your Creator Profile</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
