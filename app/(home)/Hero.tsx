import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import { Link } from "nextjs13-progress";

const SectionHero = () => {
  return (
    <section
      id="section-hero"
      className="relative z-20 text-dim w-full min-h-screen flex flex-col justify-center gap-4 px-8 md:px-24 py-40"
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
            asChild
            className="md:w-fit w-full h-fit flex gap-4"
            variant={"outline"}
          >
            <Link href={"#"}>
              <PlayCircle className="w-6 h-6 fill-success" /> Watch video
            </Link>
          </Button>
        </div>
      </div>

      <div className="md:px-40">
        <Image
          src={"/assets/project-list.png"}
          alt={"DAOCre-8"}
          width={1500}
          height={1500}
          className="shadow-2xl rounded-2xl border border-gray-100"
        />
      </div>
    </section>
  );
};

export default SectionHero;
