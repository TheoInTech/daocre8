import { useFundProjectDetailState } from "@/app/(common)/fund/[projectAddress]/FundProjectDetailContext";

export const ProjectUpdates = () => {
  const { updates } = useFundProjectDetailState();
  console.log("updates", updates);

  return (
    <div className="flex flex-col">
      {updates.map((update) => (
        <div
          key={update.idx}
          className="flex flex-col gap-2 border-b border-b-muted last:border-none last:pb-0 first:pt-0 py-8"
        >
          <span className="font-semibold text-accent">{update.title}</span>
          <span>{update.description}</span>
        </div>
      ))}
    </div>
  );
};
