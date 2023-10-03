import {
  ECategory,
  ECurrency,
  ELocation,
  IFormData,
} from "@/lib/schema/raise.schema";

export const mockProjectsData = [
  {
    address: "1234567890",
    balance: 150000,
    project_ipfs_hash: {
      category: ECategory.SOFTWARE,
      basicDetails: {
        name: "DAOCre-8",
        location: ELocation.SG,
        inspiration: "Pioneering a DAO-Powered Renaissance",
        imageUrl: "/assets/nft-sample.png",
        pdfUrl:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        fundraiseEndDate: "2023-10-01",
        launchDate: "2023-12-01",
        linkedinUrl: "https://www.linkedin.com/company/the-howdy-studios",
        githubUrl: "https://github.com/theindiehacker",
        xUrl: "https://twitter.com/_theindiehacker",
      },
      team: {
        undoxxed: false,
        name: "Creative Minds",
        about: "A group of artists venturing into the digital realm.",
        linkedinUrl: "https://linkedin.com/in/example1",
        githubUrl: "https://github.com/example1",
        xUrl: "https://example.com/team1",
        pastProjectUrl: "https://example.com/past_project1",
        teamProfileUrls: [
          { url: "https://example.com/profile1" },
          { url: "https://example.com/profile2" },
        ],
      },
      fundingTiers: [
        {
          name: "Seed",
          amountInUsd: 50000,
          description: "Seed funding for initial project development.",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          name: "Sprout",
          amountInUsd: 75000,
          description: "Funding to help grow our project.",
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
      fundingAndMilestones: {
        fundingAmount: 100000,
        walletAddress: "ABCDE12345",
        walletIsConfirmed: true,
        currency: ECurrency.SOL,
        capitalPercentage: 60,
        milestones: [
          {
            percentage: 25,
            description: "Launch MVP",
          },
          {
            percentage: 15,
            description: "User Feedback and Iteration",
          },
        ],
        stretchGoals: [
          {
            percentage: 10,
            description: "Stretch Goal 1",
          },
          {
            percentage: 15,
            description: "Stretch Goal 2",
          },
        ],
      },
    } as IFormData,
  },
  {
    address: "22222222222222",
    balance: 2500000,
    project_ipfs_hash: {
      category: ECategory.HARDWARE,
      basicDetails: {
        name: "NextGen Tech",
        location: ELocation.PH,
        inspiration: "Creating sustainable technology solutions.",
        imageUrl: "/logo-icon.svg",
        pdfUrl:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        videoUrl: null,
        fundraiseEndDate: "2024-01-01",
        launchDate: "2024-03-01",
        linkedinUrl: "https://www.linkedin.com/company/the-howdy-studios",
        githubUrl: "https://github.com/theindiehacker",
        xUrl: "https://twitter.com/_theindiehacker",
      },
      team: {
        undoxxed: true,
        name: "",
        about: "",
        linkedinUrl: "",
        githubUrl: "",
        xUrl: "",
        pastProjectUrl: "",
        teamProfileUrls: [],
      },
      fundingTiers: [
        {
          name: "Early Bird",
          amountInUsd: 75000,
          description: "Early bird funding for platform development.",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          name: "Innovator",
          amountInUsd: 90000,
          description: "Help us innovate and reach our goals faster.",
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
      fundingAndMilestones: {
        fundingAmount: 1500000,
        walletAddress: "KLMNO11223",
        walletIsConfirmed: true,
        currency: ECurrency.SOL,
        capitalPercentage: 40,
        milestones: [
          {
            percentage: 30,
            description: "Beta release with initial products",
          },
          {
            percentage: 30,
            description: "User Testing and Feedback",
          },
        ],
        stretchGoals: [
          {
            percentage: 10,
            description: "Stretch Goal 1",
          },
          {
            percentage: 15,
            description: "Stretch Goal 2",
          },
        ],
      },
    } as IFormData,
  },
  {
    address: "3333333333",
    balance: 45000,
    project_ipfs_hash: {
      category: ECategory.MUSIC,
      basicDetails: {
        name: "Melodic Innovations",
        location: ELocation.SG,
        inspiration: "Revolutionizing the way we experience music.",
        imageUrl: "/assets/nft-sample.png",
        pdfUrl:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        fundraiseEndDate: "2024-04-01",
        launchDate: "2024-06-01",
        linkedinUrl: "https://www.linkedin.com/company/the-howdy-studios",
        githubUrl: "https://github.com/theindiehacker",
        xUrl: "https://twitter.com/_theindiehacker",
      },
      team: {
        undoxxed: false,
        name: "Sound Pioneers",
        about: "A team dedicated to musical innovation.",
        linkedinUrl: "https://linkedin.com/in/example3",
        githubUrl: "https://github.com/example3",
        xUrl: "https://example.com/team3",
        pastProjectUrl: "https://example.com/past_project3",
        teamProfileUrls: [
          { url: "https://example.com/profile3" },
          { url: "https://example.com/profile4" },
        ],
      },
      fundingTiers: [
        {
          name: "Melody",
          amountInUsd: 60000,
          description: "Help us create harmonious experiences.",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          name: "Harmony",
          amountInUsd: 90000,
          description: "Help us create the future of music.",
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
      fundingAndMilestones: {
        fundingAmount: 1200000,
        walletAddress: "VWXYZ77654",
        walletIsConfirmed: true,
        currency: ECurrency.SOL,
        capitalPercentage: 40,
        milestones: [
          {
            percentage: 30,
            description: "Release of our first album",
          },
          {
            percentage: 30,
            description: "Virtual Concert Experience",
          },
        ],
        stretchGoals: [
          {
            percentage: 10,
            description: "Stretch Goal 1",
          },
          {
            percentage: 15,
            description: "Stretch Goal 2",
          },
        ],
      },
    } as IFormData,
  },
  {
    address: "44444444444",
    balance: 1500000,
    project_ipfs_hash: {
      category: ECategory.GAMES,
      basicDetails: {
        name: "Gamer's Paradise",
        location: ELocation.PH,
        inspiration: "Creating immersive gaming experiences.",
        imageUrl: "https://via.placeholder.com/150",
        pdfUrl:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        videoUrl: null,
        fundraiseEndDate: "2023-07-01",
        launchDate: "2023-09-01",
        linkedinUrl: "https://www.linkedin.com/company/the-howdy-studios",
        githubUrl: "https://github.com/theindiehacker",
        xUrl: "https://twitter.com/_theindiehacker",
      },
      team: {
        undoxxed: true,
        name: "",
        about: "",
        linkedinUrl: "",
        githubUrl: "",
        xUrl: "",
        pastProjectUrl: "",
        teamProfileUrls: [],
      },
      fundingTiers: [
        {
          name: "Gamer",
          amountInUsd: 80000,
          description: "Be part of gaming revolution.",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          name: "Elite Gamer",
          amountInUsd: 100000,
          description: "Take gaming to the next level.",
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
      fundingAndMilestones: {
        fundingAmount: 1600000,
        walletAddress: "PQRST45678",
        walletIsConfirmed: true,
        currency: ECurrency.SOL,
        capitalPercentage: 50,
        milestones: [
          {
            percentage: 25,
            description: "Launch Alpha version",
          },
          {
            percentage: 25,
            description: "Beta Testing and Feedback",
          },
        ],
        stretchGoals: [
          {
            percentage: 10,
            description: "Stretch Goal 1",
          },
          {
            percentage: 15,
            description: "Stretch Goal 2",
          },
        ],
      },
    } as IFormData,
  },
  {
    address: "555555555555",
    balance: 1400000,
    project_ipfs_hash: {
      category: ECategory.FASHION,
      basicDetails: {
        name: "Green Threads",
        location: ELocation.SG,
        inspiration: "Eco-friendly fashion for a sustainable future.",
        imageUrl: "https://via.placeholder.com/150",
        pdfUrl:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        videoUrl: null,
        fundraiseEndDate: "2023-05-01",
        launchDate: "2023-07-01",
        linkedinUrl: "https://www.linkedin.com/company/the-howdy-studios",
        githubUrl: "https://github.com/theindiehacker",
        xUrl: "https://twitter.com/_theindiehacker",
      },
      team: {
        undoxxed: false,
        name: "Green Threads",
        about: "A team dedicated to eco-friendly fashion.",
        linkedinUrl: "https://linkedin.com/in/example5",
        githubUrl: "https://github.com/example5",
        xUrl: "https://example.com/team5",
        pastProjectUrl: "https://example.com/past_project5",
        teamProfileUrls: [
          { url: "https://example.com/profile5" },
          { url: "https://example.com/profile6" },
        ],
      },
      fundingTiers: [
        {
          name: "Trendsetter",
          amountInUsd: 70000,
          description: "Setting trends while saving the planet.",
          imageUrl: "https://via.placeholder.com/150",
        },
        {
          name: "Eco Warrior",
          amountInUsd: 95000,
          description: "Pioneering sustainable fashion solutions.",
          imageUrl: "https://via.placeholder.com/150",
        },
      ],
      fundingAndMilestones: {
        fundingAmount: 1400000,
        walletAddress: "XYZAB98765",
        walletIsConfirmed: true,
        currency: ECurrency.SOL,
        capitalPercentage: 50,
        milestones: [
          {
            percentage: 25,
            description: "Launch first clothing line",
          },
          {
            percentage: 25,
            description: "Establish partnerships with eco brands",
          },
        ],
        stretchGoals: [
          {
            percentage: 10,
            description: "Stretch Goal 1",
          },
          {
            percentage: 15,
            description: "Stretch Goal 2",
          },
        ],
      },
    } as IFormData,
  },
];

export const mockAiPoweredInsights = mockProjectsData.map((project) => ({
  projectName: project.project_ipfs_hash.basicDetails.name,
  category: project.project_ipfs_hash.category,
  insights: {
    performance: "Below Average",
    suggestions: [
      "Enhance project visibility",
      "Optimize reward & funding tiers",
      "Enhance project description",
    ],
  },
}));
