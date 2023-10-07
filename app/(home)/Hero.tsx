"use client";

import { ProjectCard } from "@/app/(home)/ProjectCard";
import { VideoModal } from "@/app/(home)/VideoModal";
import { Button } from "@/components/ui/button";
import { mockProjectsData } from "@/lib/mock";
import { PlayCircle } from "lucide-react";
import { Link } from "nextjs13-progress";
import { useState } from "react";

const SectionHero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleWatchVideoClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <VideoModal onClose={handleCloseModal} />}
      <section
        id="section-hero"
        className="relative z-20 text-dim w-full min-h-screen flex flex-col justify-center gap-4 px-8 md:px-24 py-40 mt-24"
      >
        <div className="z-10 flex flex-col gap-4 text-center">
          <h1 className="font-heading font-semibold text-5xl md:text-7xl">
            Pioneering a <br />
            <span className="font-black text-gradient-primary">
              DAO-Powered
            </span>{" "}
            Renaissance
          </h1>
          <h2 className="font-body font-medium text-base md:text-xl">
            Decentralized Crowdfunding for Creators and Builders
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-8">
            <Button asChild className="md:w-fit w-full h-fit">
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSeIUD7FSluhW2QjspFW7R9YU1VVMBtfPBPvJX2YD5LqdwYiXA/viewform"
                }
                target="_blank"
              >
                Join waitlist
              </Link>
            </Button>
            <Button
              className="md:w-fit w-full h-fit flex gap-4"
              variant={"outline"}
              onClick={handleWatchVideoClick}
            >
              <PlayCircle className="w-6 h-6 fill-success" /> Watch video
            </Button>
          </div>
        </div>

        <div className="mt-8 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
            {mockProjectsData.map((project) => (
              <ProjectCard
                key={project.address}
                address={project.address}
                imageUrl={project.project_ipfs_hash.basicDetails.imageUrl}
                title={project.project_ipfs_hash.basicDetails.name}
                fundraised={project.balance}
                currency={
                  project.project_ipfs_hash.fundingAndMilestones.currency
                }
              />
            ))}
          </ul>
          <ul
            className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
            aria-hidden="true"
          >
            {mockProjectsData.map((project) => (
              <ProjectCard
                key={project.address}
                address={project.address}
                imageUrl={project.project_ipfs_hash.basicDetails.imageUrl}
                title={project.project_ipfs_hash.basicDetails.name}
                fundraised={project.balance}
                currency={
                  project.project_ipfs_hash.fundingAndMilestones.currency
                }
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SectionHero;
