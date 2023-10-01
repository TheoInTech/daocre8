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
      <CreatorTitle
        title={
          project?.project_ipfs_hash.basicDetails.name ?? "Project not found"
        }
        subtitle={
          "Manage your project, milestones, polls and monitor funding status."
        }
      />

      {/* <NoProjects /> */}
      {JSON.stringify(project)}
    </>
  );
};

export default ProjectDetailPage;
