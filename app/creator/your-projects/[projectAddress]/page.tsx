import { PageTitle } from "@/app/PageTitle";
import { BackButton } from "@/components/ui/back-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Content } from "@/creator/your-projects/[projectAddress]/Content";
import { Sidebar } from "@/creator/your-projects/[projectAddress]/Sidebar";
import { mockProjectsData } from "@/lib/mock";
// import { NoProjects } from "@/creator/NoProjects";

interface IProjectDetailPage {
  params: {
    projectAddress: string;
  };
}

const ProjectDetailPage = ({ params }: IProjectDetailPage) => {
  const { projectAddress } = params;

  const project = mockProjectsData.find(
    (mock) => mock.address === projectAddress
  );

  return (
    <>
      <div className="flex flex-col gap-4 mb-8">
        <Breadcrumbs
          links={[
            { href: "/creator/your-projects", name: "Your Projects" },
            { name: project?.project_ipfs_hash?.basicDetails.name ?? "" },
          ]}
        />
        <BackButton href="/creator/your-projects" />
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

export default ProjectDetailPage;
