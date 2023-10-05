import { useFundProjectDetailState } from "@/app/(common)/fund/[projectAddress]/FundProjectDetailContext";

export const ProjectUpdates = () => {
  const { updates } = useFundProjectDetailState();

  return (
    <div className="flex flex-col">
      {updates.length > 0 ? (
        <div className="flex flex-col gap-4">
          {updates.map((update) => (
            <div
              key={update.idx}
              className="flex flex-col gap-2 border-b border-b-muted first:pt-0 py-8"
            >
              <span className="font-semibold text-accent whitespace-pre-line">
                {update.title}
              </span>
              <span className="whitespace-pre-line">{update.description}</span>
            </div>
          ))}
          <span className="text-muted italic text-sm font-semibold">
            -- End of updates --
          </span>
        </div>
      ) : (
        <span>No project updates yet.</span>
      )}
    </div>
  );
};
