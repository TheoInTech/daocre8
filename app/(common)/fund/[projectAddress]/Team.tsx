import { useFundProjectDetailState } from "@/app/(common)/fund/[projectAddress]/FundProjectDetailContext";
import { Detail } from "@/components/ui/detail";
import { LinkIcon } from "lucide-react";
import { Link } from "nextjs13-progress";

export const Team = () => {
  const { project } = useFundProjectDetailState();
  const team = project?.project_ipfs_hash?.team;

  return (
    <div className="flex flex-col gap-8">
      {team && team?.undoxxed ? (
        <div>
          The team for this project chose to be{" "}
          <span className="font-medium">undoxxed</span>.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Detail title="Team Name" value={team?.name} />
          <Detail title="About the team" value={team?.about} />
          <Detail
            title="LinkedIn"
            value={
              <>
                <Link
                  href={team?.linkedinUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-secondary/50 underline underline-offset-4"
                >
                  LinkedIn URL <LinkIcon className="w-4 h-4" />
                </Link>
              </>
            }
          />
          <Detail
            title="Github"
            value={
              <>
                <Link
                  href={team?.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-secondary/50 underline underline-offset-4"
                >
                  Github URL <LinkIcon className="w-4 h-4" />
                </Link>
              </>
            }
          />
          <Detail
            title="X"
            value={
              <>
                <Link
                  href={team?.xUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-secondary/50 underline underline-offset-4"
                >
                  X URL <LinkIcon className="w-4 h-4" />
                </Link>
              </>
            }
          />
          <Detail
            title="Past project URL"
            value={
              <>
                <Link
                  href={team?.pastProjectUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:text-secondary/50 underline underline-offset-4"
                >
                  Past Project URL <LinkIcon className="w-4 h-4" />
                </Link>
              </>
            }
          />
          <Detail
            title="Other team members' profiles"
            value={
              <ul className="flex flex-col gap-4">
                {team?.teamProfileUrls?.map(({ url }, index) => (
                  <li key={`${url ?? ""}-${index}`}>
                    <Link
                      href={url ?? "#"}
                      target="_blank"
                      className="flex items-center gap-2 text-secondary hover:text-secondary/50 underline underline-offset-4"
                    >
                      Team member # {index + 1} <LinkIcon className="w-4 h-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            }
          />
        </div>
      )}
    </div>
  );
};
