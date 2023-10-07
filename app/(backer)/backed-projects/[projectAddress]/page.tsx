import { Content } from "@/app/(backer)/backed-projects/[projectAddress]/Content";
import { Sidebar } from "@/app/(backer)/backed-projects/[projectAddress]/Sidebar";
import { PageTitle } from "@/app/PageTitle";
import { BackButton } from "@/components/ui/back-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { mockProjectsData } from "@/lib/mock";
// import { NoProjects } from "@/app/(backer)/NoProjects";

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

      {/* <NoProjects /> */}

      <div className="grid grid-cols-4 my-4 space-x-8">
        <Sidebar className="col-span-1" />
        <Content className="col-span-3" project={project} />
      </div>
    </>
  );
};

export default BackedProjectDetailPage;
