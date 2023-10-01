import { BackButton } from "@/components/ui/back-button";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CreatorTitle } from "@/creator/CreatorTitle";
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
      <CreatorTitle
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
      {JSON.stringify(project)}
    </>
  );
};

export default ProjectDetailPage;
