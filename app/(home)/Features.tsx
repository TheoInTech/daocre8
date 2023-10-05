import { Section } from "@/app/(home)/Section";
import Image from "next/image";

const features = [
  {
    title: "Effortless Project Launch",
    description:
      "Creators can easily kickstart projects, while backers can seamlessly support initiatives they believe in.",
    image: "/assets/icons/launch.png",
  },
  {
    title: "Collaborative Decision-Making",
    description:
      "Foster a collaborative environment with decentralized polls for key project decisions.",
    image: "/assets/icons/collab.png",
  },
  {
    title: "Transparent Progress Tracking",
    description:
      "Keep everyone informed on project milestones and achievements in real-time.",
    image: "/assets/icons/tracking.png",
  },
  {
    title: "Exclusive Creator NFTs",
    description:
      "Creators can mint unique NFTs, offering backers a tangible stake in the project.",
    image: "/assets/icons/nft.png",
  },
  {
    title: "Secured Funding Protocol",
    description:
      "Safeguard funds through a secure escrow until project milestones are duly met.",
    image: "/assets/icons/secured.png",
  },
  {
    title: "Community Engagement",
    description:
      "A thriving ecosystem where creators and backers interact, share insights, and foster project success.",
    image: "/assets/icons/community.png",
  },
];

const SectionFeatures = () => {
  return (
    <Section
      id={"section-features"}
      title={"Features"}
      description={"Bridging Creators and Backers"}
      className="card-glass rounded-none"
      containerClassName="max-w-[95%] md:max-w-[90%] 2xl:max-w-[90%]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-4 lg:gap-6 justify-items-center sm:justify-items-stretch">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="grid-cols-1 grid gap-6 card-glass p-8 md:p-10 items-center"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              className="inline-block max-w-full w-fit h-16 primary-gradient rounded-full"
              height={500}
              width={500}
            />
            <div className="text-xl font-semibold">{feature.title}</div>
            <div className="text-sm">{feature.description}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default SectionFeatures;
