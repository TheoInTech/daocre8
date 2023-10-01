import { PageTitle } from "@/app/PageTitle";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
// import { NoProjects } from "@/creator/NoProjects";
import { mockProjectsData } from "@/lib/mock";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { Link } from "nextjs13-progress";

const YourProjectsPage = () => {
  return (
    <>
      <PageTitle
        title={"Your Projects"}
        subtitle={
          "Manage your projects, milestones, polls and monitor funding status."
        }
      />

      {/* <NoProjects /> */}

      {mockProjectsData.map((data) => {
        const fundingProgressPercentage =
          (data.balance /
            data.project_ipfs_hash.fundingAndMilestones.fundingAmount) *
          100;

        return (
          <div
            key={data.project_ipfs_hash.basicDetails.name}
            className="grid grid-cols-1 md:grid-cols-6 p-8 gap-8 md:gap-0 md:space-x-8 card-glass"
          >
            {/* Image */}
            <div className="flex flex-col gap-4 col-span-1 md:col-span-2">
              <Image
                src={data.project_ipfs_hash.basicDetails.imageUrl}
                alt={data.project_ipfs_hash.basicDetails.name}
                width={1000}
                height={1000}
                className="shadow-lg rounded-lg"
              />
            </div>

            {/* Header */}
            <div className="flex flex-col gap-2 col-span-1 md:col-span-3">
              <h4 className="text-3xl text-gradient-blue font-semibold">
                {data.project_ipfs_hash.basicDetails.name}
              </h4>
              <h5 className="text-xl">
                <span className="text-gradient-yellow font-semibold">
                  {data.project_ipfs_hash.category}
                </span>{" "}
                category
              </h5>
              <h6 className="text-base">
                {data.project_ipfs_hash.basicDetails.inspiration}
              </h6>
              <div className="flex gap-4 my-2">
                {data.project_ipfs_hash.basicDetails.xUrl && (
                  <Link
                    href={data.project_ipfs_hash.basicDetails.xUrl}
                    target="_blank"
                  >
                    <Twitter className="w-6 h-6 hover:text-secondary duration-300 stroke-2" />
                  </Link>
                )}
                {data.project_ipfs_hash.basicDetails.linkedinUrl && (
                  <Link
                    href={data.project_ipfs_hash.basicDetails.linkedinUrl}
                    target="_blank"
                  >
                    <Linkedin className="w-6 h-6 hover:text-secondary duration-300 stroke-2" />
                  </Link>
                )}
                {data.project_ipfs_hash.basicDetails.githubUrl && (
                  <Link
                    href={data.project_ipfs_hash.basicDetails.githubUrl}
                    target="_blank"
                  >
                    <Github className="w-6 h-6 hover:text-secondary duration-300 stroke-2" />
                  </Link>
                )}
              </div>

              <Separator className="my-4" />

              {/* Funding Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 space-8 gap-8 text-lg font-medium">
                <div className="flex flex-col gap-2 col-span-1 md:col-span-2">
                  Funding progress:{" "}
                  <Progress value={fundingProgressPercentage} />
                  <span>
                    {data.balance.toLocaleString()} of{" "}
                    {data.project_ipfs_hash.fundingAndMilestones.fundingAmount.toLocaleString()}{" "}
                    <strong>
                      {data.project_ipfs_hash.fundingAndMilestones.currency}
                    </strong>{" "}
                    raised
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  Fundraise ends in:{" "}
                  <CountdownTimer
                    className="text-gradient-violet font-bold"
                    endTime={
                      data.project_ipfs_hash.basicDetails.fundraiseEndDate
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  Project launches in:{" "}
                  <CountdownTimer
                    className="text-gradient-violet font-bold"
                    endTime={data.project_ipfs_hash.basicDetails.launchDate}
                  />
                </div>
              </div>
            </div>

            {/* Manage Button */}
            <div className="col-span-1 justify-self-end">
              <Button
                asChild={fundingProgressPercentage >= 100}
                disabled={fundingProgressPercentage < 100}
              >
                {fundingProgressPercentage < 100 ? (
                  <>Manage</>
                ) : (
                  <Link href={`/creator/your-projects/${data.address}`}>
                    Manage
                  </Link>
                )}
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default YourProjectsPage;
