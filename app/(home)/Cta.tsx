import { Button } from "@/components/ui/button";
import { Link } from "nextjs13-progress";

const SectionCta = () => {
  return (
    <section
      id={"section-cta"}
      className="z-20 flex bg-black/80 flex-col items-center justify-center w-full gap-4 py-8 overflow-hidden text-center h-fit bg-neon-green md:py-16 lg:py-24 xl:overflow-auto"
    >
      <h4 className="text-dim text-[28px] lg:text-[48px] leading-[30px] lg:leading-[54px] font-extrabold px-8 lg:px-0">
        Become a <span className="text-gradient-primary">DAOCre-8-or</span>{" "}
        today!
      </h4>
      <h5 className="font-body font-medium text-[16px] lg:text-[22px] leading-[22px] lg:leading-[32px] px-8 md:px-40">
        Whether you&apos;re a creator with a vision or a backer with a passion
        for innovation, there&apos;s a place for you here. <br />
        Join us and help shape the future, one project at a time.
      </h5>
      <Button asChild className="w-fit h-fit my-8">
        <Link
          href={
            "https://docs.google.com/forms/d/e/1FAIpQLSeIUD7FSluhW2QjspFW7R9YU1VVMBtfPBPvJX2YD5LqdwYiXA/viewform"
          }
          target="_blank"
        >
          Join waitlist
        </Link>
      </Button>
    </section>
  );
};

export default SectionCta;
