import { PageTitle } from "@/app/PageTitle";
import { BackButton } from "@/components/ui/back-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { mockProjectsData } from "@/lib/mock";

interface IBackedProjectDetailPage {
  params: {
    projectAddress: string;
  };
}

const BackedProjectDetailPage = ({ params }: IBackedProjectDetailPage) => {
  const { projectAddress } = params;

  const project = mockProjectsData.find(
    (mock) => mock.address === projectAddress
  );

  return (
    <>
      <div className="flex flex-col gap-4 mb-8">
        <Breadcrumbs
          links={[
            { href: "/backed-projects", name: "Backed Projects" },
            { name: project?.project_ipfs_hash?.basicDetails.name ?? "" },
          ]}
        />
        <BackButton href="/backed-projects" />
      </div>

      <PageTitle
        title={
          project?.project_ipfs_hash?.basicDetails.name ?? "Project not found"
        }
        subtitle={
          <>
            <span className="font-semibold capitalize text-gradient-violet">
              {project?.project_ipfs_hash?.category?.toLocaleLowerCase()}
            </span>{" "}
            category
          </>
        }
      />
    </>
  );
};

export default BackedProjectDetailPage;
