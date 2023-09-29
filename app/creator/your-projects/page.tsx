import { CreatorTitle } from "@/creator/CreatorTitle";
import { NoProjects } from "@/creator/NoProjects";

const YourProjectsPage = () => {
  return (
    <>
      <CreatorTitle
        title={"Your Projects"}
        subtitle={
          "Manage your projects, milestones, polls and monitor funding status."
        }
      />

      <NoProjects />
    </>
  );
};

export default YourProjectsPage;
