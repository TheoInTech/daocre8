import { CreatorTitle } from "@/creator/CreatorTitle";
import { ECurrency, ELocation } from "@/lib/schema/raise.schema";
// import { NoProjects } from "@/creator/NoProjects";

export const formDataDefaults = [
  {
    category: "Technology",
    basicDetails: {
      name: "Project Alpha",
      location: ELocation.SG,
      inspiration: "Creating a decentralized data marketplace.",
      imageUrl: "https://example.com/image1.jpg",
      pdfUrl: "https://example.com/whitepaper1.pdf",
      videoUrl: "https://youtube.com/watch?v=example1",
      launchDate: "2023-10-01",
      fundraiseEndDate: "2023-12-01",
    },
    team: {
      undoxxed: false,
      name: "Alpha Team",
      about:
        "A group of blockchain enthusiasts aiming to redefine data exchange.",
      linkedinUrl: "https://linkedin.com/in/example1",
      githubUrl: "https://github.com/example1",
      xUrl: "https://example.com/team1",
      pastProjectUrl: "https://example.com/past_project1",
      teamProfileUrls: [
        "https://example.com/profile1",
        "https://example.com/profile2",
      ],
    },
    fundingTiers: [
      {
        name: "Seed",
        amountInUsd: 50000,
        description: "Seed funding to kickstart the project.",
        imageUrl: "https://example.com/tier1.jpg",
      },
    ],
    fundingAndMilestones: {
      fundingAmount: 1000000,
      walletAddress: "ABCDE12345",
      walletIsConfirmed: true,
      acceptedCurrency: ECurrency.SOL,
      capitalPercentage: 10,
      milestones: [
        {
          percentage: 25,
          description: "Launch MVP",
        },
      ],
    },
  },
  {
    category: "Art",
    basicDetails: {
      name: "Project Bravo",
      location: ELocation.PH,
      inspiration: "Building a virtual art gallery for digital artists.",
      imageUrl: "https://example.com/image2.jpg",
      pdfUrl: "https://example.com/whitepaper2.pdf",
      videoUrl: "https://youtube.com/watch?v=example2",
      launchDate: "2023-11-01",
      fundraiseEndDate: "2024-01-01",
    },
    team: {
      undoxxed: true,
      name: "Bravo Team",
      about: "Artists and developers coming together to promote digital art.",
      linkedinUrl: "https://linkedin.com/in/example2",
      githubUrl: "https://github.com/example2",
      xUrl: "https://example.com/team2",
      pastProjectUrl: "https://example.com/past_project2",
      teamProfileUrls: [
        "https://example.com/profile3",
        "https://example.com/profile4",
      ],
    },
    fundingTiers: [
      {
        name: "Angel",
        amountInUsd: 100000,
        description: "Funding for initial development and artist onboardings.",
        imageUrl: "https://example.com/tier2.jpg",
      },
    ],
    fundingAndMilestones: {
      fundingAmount: 2000000,
      walletAddress: "FGHIJ67890",
      walletIsConfirmed: true,
      acceptedCurrency: ECurrency.SOL,
      capitalPercentage: 20,
      milestones: [
        {
          percentage: 50,
          description: "Open to public with 100 artists",
        },
      ],
    },
  },
  {
    category: "Education",
    basicDetails: {
      name: "Project Charlie",
      location: ELocation.PH,
      inspiration: "Providing decentralized education resources.",
      imageUrl: "https://example.com/image3.jpg",
      pdfUrl: "https://example.com/whitepaper3.pdf",
      videoUrl: "https://youtube.com/watch?v=example3",
      launchDate: "2024-01-01",
      fundraiseEndDate: "2024-03-01",
    },
    team: {
      undoxxed: false,
      name: "Charlie Team",
      about: "Educators and developers aiming to decentralize education.",
      linkedinUrl: "https://linkedin.com/in/example3",
      githubUrl: "https://github.com/example3",
      xUrl: "https://example.com/team3",
      pastProjectUrl: "https://example.com/past_project3",
      teamProfileUrls: [
        "https://example.com/profile5",
        "https://example.com/profile6",
      ],
    },
    fundingTiers: [
      {
        name: "Early Bird",
        amountInUsd: 75000,
        description: "Early bird funding for platform development.",
        imageUrl: "https://example.com/tier3.jpg",
      },
    ] as Array<IFundingTier>,
    fundingAndMilestones: {
      fundingAmount: 1500000,
      walletAddress: "KLMNO11223",
      walletIsConfirmed: true,
      acceptedCurrency: ECurrency.SOL,
      capitalPercentage: 15,
      milestones: [
        {
          percentage: 30,
          description: "Beta release with initial courses",
        },
      ],
    },
  },
];

const YourProjectsPage = () => {
  return (
    <>
      <CreatorTitle
        title={"Your Projects"}
        subtitle={
          "Manage your projects, milestones, polls and monitor funding status."
        }
      />

      {/* <NoProjects /> */}

      <div className="grid grid-cols-1 md:grid-cols-4"></div>
    </>
  );
};

export default YourProjectsPage;
