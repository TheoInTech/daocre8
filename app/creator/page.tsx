import { AIPoweredInsights } from "@/app/creator/(creator-profile)/AIPoweredInsights";
import { CreatorBehaviorInsights } from "@/app/creator/(creator-profile)/CreatorBehaviorInsights";
import { CreatorSummary } from "@/app/creator/(creator-profile)/CreatorSummary";
import { EngagementAnalytics } from "@/app/creator/(creator-profile)/EngagementAnalytics";
import { CreatorTitle } from "@/creator/CreatorTitle";
// import { NoProjects } from "@/creator/NoProjects";

const CreatorPage = () => {
  return (
    <>
      <CreatorTitle
        title={"Creator Profile"}
        subtitle={
          "Monitor your projects' AI-powered insights, analytics, funding and more."
        }
      />

      {/* <NoProjects /> */}
      <div className="columns-1 md:columns-2 space-y-4">
        <CreatorSummary />
        <CreatorBehaviorInsights />
        <AIPoweredInsights />
        <EngagementAnalytics />
      </div>
    </>
  );
};

export default CreatorPage;
