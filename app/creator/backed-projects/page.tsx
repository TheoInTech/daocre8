import { CreatorTitle } from "@/creator/CreatorTitle";
import { NoProjects } from "@/creator/NoProjects";

const BackedProjectsPage = () => {
  return (
    <>
      <CreatorTitle
        title={"Backed Projects"}
        subtitle={
          "Manage your backed projects, vote on milestones and see project updates."
        }
      />

      <NoProjects />
    </>
  );
};

export default BackedProjectsPage;
