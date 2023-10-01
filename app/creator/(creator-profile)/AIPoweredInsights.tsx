import { CreatorSections } from "@/app/creator/(creator-profile)/CreatorSections";
import { mockAiPoweredInsights } from "@/lib/mock";

export const AIPoweredInsights = () => {
  return (
    <CreatorSections title="AI-powered Insights">
      <div className="flex flex-col gap-8 w-full max-h-[24rem] overflow-auto pr-4">
        {mockAiPoweredInsights.map((project) => (
          <div
            key={project.projectName}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-b-muted last:border-b-0 pb-8"
          >
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-secondary">Project</span>
              <span>{project.projectName}</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-semibold text-secondary">Category</span>
              <span>{project.category}</span>
            </div>

            <div className="flex flex-col gap-2 col-span-2">
              <span className="font-semibold text-secondary">
                Predicted Performance
              </span>
              {project.insights.performance}
            </div>

            <div className="flex flex-col gap-2 col-span-2">
              <span className="font-semibold text-secondary">Suggestions</span>
              <ul className="list-disc list-inside">
                {project.insights.suggestions.map((suggestion) => (
                  <li
                    key={`insight-${project.projectName}-${suggestion}`}
                    className="list-item"
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </CreatorSections>
  );
};
