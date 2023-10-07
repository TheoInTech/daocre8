"use client";

import { NoProjects } from "@/app/(common)/fund/NoProjects";
import { ProjectCard } from "@/app/(common)/fund/ProjectCard";
import { OptionsTabs } from "@/components/ui/options-tabs";
import { mockProjectsData } from "@/lib/mock";
import { ECategory } from "@/lib/schema/raise.schema";
import { useMemo, useState } from "react";

const FundPage = () => {
  const [currentTab, setCurrentTab] = useState<ECategory>();

  // Filter projects if there's a selected category tab
  const filteredProject = useMemo(
    () =>
      mockProjectsData.filter((project) =>
        currentTab ? project.project_ipfs_hash.category === currentTab : project
      ),
    [currentTab]
  );

  return (
    <div className="flex flex-col gap-8 items-center h-full w-full flex-grow min-h-screen">
      <OptionsTabs
        handleCurrentTab={setCurrentTab}
        currentTab={currentTab}
        options={Object.entries(ECategory)}
      />

      {filteredProject.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProject.map((project) => (
            <ProjectCard
              key={project.address}
              id={project.address}
              imageUrl={project.project_ipfs_hash.basicDetails.imageUrl}
              title={project.project_ipfs_hash.basicDetails.name}
              description={project.project_ipfs_hash.basicDetails.inspiration}
              category={project.project_ipfs_hash.category}
              socials={{
                linkedinUrl: project.project_ipfs_hash.basicDetails.linkedinUrl,
                githubUrl: project.project_ipfs_hash.basicDetails.githubUrl,
                xUrl: project.project_ipfs_hash.basicDetails.xUrl,
              }}
            />
          ))}
        </div>
      ) : (
        <NoProjects />
      )}
    </div>
  );
};

export default FundPage;
