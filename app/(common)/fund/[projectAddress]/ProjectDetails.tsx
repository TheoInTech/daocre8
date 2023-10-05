import { useFundProjectDetailState } from "@/app/(common)/fund/[projectAddress]/FundProjectDetailContext";
import { CountdownTimer } from "@/components/ui/countdown-timer";
import { IBasicDetails } from "@/lib/schema/raise.schema";
import { Github, LinkIcon, Linkedin, Twitter } from "lucide-react";
import { Link } from "nextjs13-progress";

export const ProjectDetails = () => {
  const { project } = useFundProjectDetailState();
  const {
    inspiration,
    pdfUrl,
    videoUrl,
    xUrl,
    githubUrl,
    linkedinUrl,
    location,
    launchDate,
    fundraiseEndDate,
  } = project?.project_ipfs_hash.basicDetails as IBasicDetails;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col gap-2 col-span-2">
        <span className="font-semibold text-accent">
          Inspiration behind the project
        </span>
        <span>{inspiration}</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-accent">Info deck URL</span>
        <Link
          href={pdfUrl}
          target="_blank"
          className="flex items-center gap-2 text-secondary hover:text-secondary/50 underline underline-offset-4"
        >
          View Info Deck Here <LinkIcon className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-accent">Video URL</span>
        <Link
          href={videoUrl}
          target="_blank"
          className="flex items-center gap-2 text-secondary hover:text-secondary/50 underline underline-offset-4"
        >
          Watch Video Here <LinkIcon className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-accent">Socials</span>
        <div className="flex gap-4 items-start w-full">
          {xUrl && (
            <Link href={xUrl} target="_blank">
              <Twitter className="w-6 h-6 hover:text-secondary duration-300 stroke-1" />
            </Link>
          )}
          {linkedinUrl && (
            <Link href={linkedinUrl} target="_blank">
              <Linkedin className="w-6 h-6 hover:text-secondary duration-300 stroke-1" />
            </Link>
          )}
          {githubUrl && (
            <Link href={githubUrl} target="_blank">
              <Github className="w-6 h-6 hover:text-secondary duration-300 stroke-1" />
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-accent">Location</span>
        <span>{location}</span>
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-accent">Fundraise ending in</span>
        <CountdownTimer className="font-bold" endTime={fundraiseEndDate} />
      </div>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-accent">Launching in</span>
        <CountdownTimer className="font-bold" endTime={launchDate} />
      </div>
    </div>
  );
};
