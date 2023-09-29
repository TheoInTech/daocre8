import { CreatorTitle } from "@/creator/CreatorTitle";
import { NoProjects } from "@/creator/NoProjects";

const CreatorPage = () => {
  return (
    <>
      <CreatorTitle
        title={"Creator Profile"}
        subtitle={
          "Monitor your AI-powered projects' insights, analytics, funding and more."
        }
      />

      <NoProjects />
    </>
  );
};

export default CreatorPage;
