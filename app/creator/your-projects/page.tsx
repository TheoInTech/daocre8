import { Button } from "@/components/ui/button";
import { CreatorTitle } from "@/creator/CreatorTitle";
// import { NoProjects } from "@/creator/NoProjects";
import { mockProjectsData } from "@/creator/your-projects/mock";
import Image from "next/image";
import Link from "next/link";

const YourProjectsPage = () => {
  return (
    <>
      <CreatorTitle
        title={"Your Projects"}
        subtitle={
          "Manage your projects, milestones, polls and monitor funding status."
        }
      />

      {/* <NoProjects /> */}

      {mockProjectsData.map((data) => (
        <div
          key={data.project_ipfs_hash.basicDetails.name}
          className="grid grid-cols-1 md:grid-cols-3 p-8 card-glass"
        >
          <div className="flex flex-col gap-8">
            <Image
              src={data.project_ipfs_hash.basicDetails.imageUrl}
              alt={data.project_ipfs_hash.basicDetails.name}
              width={1000}
              height={1000}
              className="shadow-lg rounded-lg"
            />
            <Button
              asChild
              disabled={
                data.balance ===
                data.project_ipfs_hash.fundingAndMilestones.fundingAmount
              }
            >
              <Link href={""}>Manage</Link>
            </Button>
          </div>
          <div></div>
        </div>
      ))}
    </>
  );
};

export default YourProjectsPage;
