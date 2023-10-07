import {
  ECategory,
  ECurrency,
  ELocation,
  IFormData,
} from "@/lib/schema/raise.schema";
import {
  IDecisionMakingPoll,
  IMilestoneAchievementPoll,
} from "@/lib/types/polls.types";
import { IMilestone } from "./types/milestones.types";

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
    balance: 80000,
    project_ipfs_hash: {
      category: ECategory.HARDWARE,
      basicDetails: {
        name: "Solar-Powered Schools for Alien Exchange Students",
        location: ELocation.PH,
        inspiration:
          "Help us build solar-powered schools for exchange students from outer space! Back our project and get a chance to attend a galactic graduation party with alien DJs and zero-gravity dance-offs!",
        imageUrl:
          "/assets/mock/DreamShaper_v7_SolarPowered_Schools_for_Alien_Exchange_Studen_0.jpg",
        pdfUrl:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        videoUrl: null,
        fundraiseEndDate: "2024-01-01",
        launchDate: "2024-03-01",
        linkedinUrl: "https://www.linkedin.com/company/the-howdy-studios",
        githubUrl: "",
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
        fundingAmount: 100000,
        walletAddress: "KLMNO11223",
        walletIsConfirmed: true,
        currency: ECurrency.SOL,
        capitalPercentage: 40,
        milestones: [
          {
            percentage: 30,
            description:
              "Solar panels installed at School A - Backers receive holographic alien dance tutorials!",
          },
          {
            percentage: 20,
            description:
              "Solar panels installed at School B - Exclusive 'Intergalactic Prom Night' for backers!",
          },
          {
            percentage: 10,
            description:
              "Solar panels installed at School C - VIP trip to an alien planet for top backers!",
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
      category: ECategory.GAMES,
      basicDetails: {
        name: "Next-Gen Blockchain Gaming Console - Time Travel Edition",
        location: ELocation.SG,
        inspiration:
          "Back us to create the world's first time-traveling gaming console! Unlock exclusive game levels set in the past, future, and alternate dimensions. Plus, receive a virtual time-traveling 'Sidekick Pet' to accompany you on your adventures!",
        imageUrl:
          "/assets/mock/DreamShaper_v7_NextGen_Blockchain_Gaming_Console_Time_Travel_0.jpg",
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
        name: "SunSolutions Foundation",
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
        fundingAmount: 150000,
        walletAddress: "VWXYZ77654",
        walletIsConfirmed: true,
        currency: ECurrency.SOL,
        capitalPercentage: 40,
        milestones: [
          {
            percentage: 20,
            description:
              "Prototype development - 'Time Warp Party' with historical and futuristic figures!",
          },
          {
            percentage: 20,
            description:
              "Beta testing - Exclusive time-travel-themed in-game skins and items!",
          },
          {
            percentage: 20,
            description:
              "Mass production - Limited edition 'Time Traveler's Console' for early backers!",
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
      category: ECategory.HARDWARE,
      basicDetails: {
        name: "Jurassic Park Revival",
        location: ELocation.PH,
        inspiration:
          "Support us in bringing back the dinosaurs! Backers receive a virtual pet baby dinosaur and a front-row seat to our 'Dino-Palooza' time-travel event, where you can witness the resurrection of a T-Rex!",
        imageUrl: "/assets/mock/DreamShaper_v7_Jurassic_Park_Revival_2.jpg",
        pdfUrl:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        videoUrl: null,
        fundraiseEndDate: "2023-07-01",
        launchDate: "2023-09-01",
        linkedinUrl: "",
        githubUrl: "",
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
        fundingAmount: 1000000,
        walletAddress: "PQRST45678",
        walletIsConfirmed: true,
        currency: ECurrency.SOL,
        capitalPercentage: 50,
        milestones: [
          {
            percentage: 20,
            description:
              "Dino DNA extraction - Backers get a DNA-themed virtual dance party!",
          },
          {
            percentage: 20,
            description:
              "Genetic cloning success - Exclusive 'Dino Whisperer' virtual badges for backers!",
          },
          {
            percentage: 10,
            description:
              "T-Rex release - A virtual 'Jurassic Jam' concert with dinosaur musicians!",
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
    balance: 20000,
    project_ipfs_hash: {
      category: ECategory.FOOD,
      basicDetails: {
        name: "Quantum Teleportation Pods for Pets",
        location: ELocation.SG,
        inspiration:
          "Support our mission to teleport your pets across the universe! Backers receive a virtual teleportation pod and a chance to teleport their pet to a virtual 'Pet Planet' for playdates with alien animals!",
        imageUrl:
          "/assets/mock/DreamShaper_v7_Quantum_Teleportation_Pods_for_Pets_2.jpg",
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
        name: "QuantumPets Co.",
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
        fundingAmount: 75000,
        walletAddress: "XYZAB98765",
        walletIsConfirmed: true,
        currency: ECurrency.SOL,
        capitalPercentage: 50,
        milestones: [
          {
            percentage: 15,
            description:
              "Quantum teleportation tech development - 'Teleportation Tiki Party' with your virtual pets!",
          },
          {
            percentage: 15,
            description:
              "Successful teleportation trials - Customizable virtual pet teleportation pods!",
          },
          {
            percentage: 10,
            description:
              "Pet Planet launch - VIP access to a virtual pet paradise with alien-themed games!",
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
    address: "demodemodemo",
    balance: 200000,
    project_ipfs_hash: {
      category: ECategory.DANCE,
      basicDetails: {
        name: "AI-Powered Dance-Off Competition",
        location: ELocation.SG,
        inspiration:
          "Get ready to dance your heart out with AI-powered dance partners! Back our project and receive a virtual 'Dance Battle' avatar. Join our virtual dance-off events with AI dancers, and win the title of 'Ultimate Dance Guru'!",
        imageUrl:
          "/assets/mock/DreamShaper_v7_AIPowered_Robot_DanceOff_Competition_1.jpg",
        pdfUrl:
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        videoUrl: null,
        fundraiseEndDate: "2023-012-01",
        launchDate: "2024-02-01",
        linkedinUrl: "https://www.linkedin.com/company/the-howdy-studios",
        githubUrl: "https://github.com/theindiehacker",
        xUrl: "https://twitter.com/_theindiehacker",
      },
      team: {
        undoxxed: false,
        name: "GroovyBots Inc.",
        about: "A team dedicated to GroovyBots dancing",
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
          name: "Groovy Mover Tier",
          amountInUsd: 20,
          description: `- Access to all dance competitions.
          - Exclusive in-game dance move.
          `,
          imageUrl: "https://via.placeholder.com/150?text=Groovy Mover Tier",
        },
        {
          name: "Funky Groover Tier",
          amountInUsd: 50,
          description: `- Everything from the Groovy Mover Tier.
          - VIP voting privileges for the coolest dance routines.
          `,
          imageUrl: "https://via.placeholder.com/150?text=Funky Groover Tier",
        },
        {
          name: "Dance Legend Tier",
          amountInUsd: 100,
          description: `- Everything from the Funky Groover Tier.
          - A chance to be a guest judge in one of our dance battles.
          `,
          imageUrl: "https://via.placeholder.com/150?text=Dance Legend Tier",
        },
        {
          name: "Ultimate Dance Guru Tier",
          amountInUsd: 500,
          description: `- Everything from the Dance Legend Tier.
          - Personalized AI dance routine choreographed just for you.
          `,
          imageUrl:
            "https://via.placeholder.com/150?text=Ultimate Dance Guru Tier",
        },
      ],
      fundingAndMilestones: {
        fundingAmount: 50000,
        walletAddress: "XYZAB98765",
        walletIsConfirmed: true,
        currency: ECurrency.SOL,
        capitalPercentage: 50,
        milestones: [
          {
            percentage: 15,
            description:
              "AI dance algorithm development - Exclusive virtual dance-off tutorial sessions!",
          },
          {
            percentage: 15,
            description:
              "AI dance competitions - Dance battles with AI dancers and exclusive in-game dance moves!",
          },
          {
            percentage: 10,
            description:
              "Crowning the Dance Guru - Virtual dance-off championship with celebrity judges!",
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

export const mockProjectUpdates = [
  {
    projectAddress: mockProjectsData[5].address,
    idx: 1,
    title: "Milestone 2 Achieved! Dance Battles Galore!",
    description: `Hello, Dance Enthusiasts!

    We're thrilled to share the latest update on our AI-Powered Dance-Off Competition project. Thanks to your incredible support, we've hit a major milestone! 🎉
    
    Milestone 2: AI Dance Competitions
    
    Our AI dance algorithms are groovier than ever, and we've unleashed them onto the virtual dance floor. Backers, you're invited to join the dance battles with our AI dancers. Get ready for some funky moves and electrifying showdowns!
    
    Exclusive Features:
    
    Dance Battle Tournaments: Participate in daily dance battles and show off your moves.
    Vote for the Funkiest Moves: Backers have the power to vote for the coolest dance routines.
    Unlock Exclusive In-Game Dance Moves: Top backers gain access to jaw-dropping dance moves for their avatars.
    `,
  },
];

export const mockProjectMilestones: Array<IMilestone & { address: string }> = [
  {
    address: `${mockProjectsData[5].address}-milestone-1`,
    idx: 1,
    project_dao_id: mockProjectsData[5].address,
    percentage:
      mockProjectsData[5].project_ipfs_hash.fundingAndMilestones.milestones[0]
        .percentage,
    milestone_ipfs_hash:
      mockProjectsData[5].project_ipfs_hash.fundingAndMilestones.milestones[0]
        .description,
  },
  {
    address: `${mockProjectsData[5].address}-milestone-2`,
    idx: 2,
    project_dao_id: mockProjectsData[5].address,
    percentage:
      mockProjectsData[5].project_ipfs_hash.fundingAndMilestones.milestones[1]
        .percentage,
    milestone_ipfs_hash:
      mockProjectsData[5].project_ipfs_hash.fundingAndMilestones.milestones[1]
        .description,
  },
  {
    address: `${mockProjectsData[5].address}-milestone-3`,
    idx: 3,
    project_dao_id: mockProjectsData[5].address,
    percentage:
      mockProjectsData[5].project_ipfs_hash.fundingAndMilestones.milestones[2]
        .percentage,
    milestone_ipfs_hash:
      mockProjectsData[5].project_ipfs_hash.fundingAndMilestones.milestones[2]
        .description,
  },
];

export const mockProjectMilestonePolls: Array<IMilestoneAchievementPoll> = [
  {
    idx: 1,
    project_dao_id: mockProjectsData[5].address,
    milestone_id: mockProjectMilestones[0].address,
    voter_map: [
      { key: "1", vote: true },
      { key: "2", vote: true },
      { key: "3", vote: false },
      { key: "4", vote: true },
      { key: "5", vote: true },
      { key: "6", vote: true },
      { key: "7", vote: false },
      { key: "8", vote: true },
      { key: "9", vote: true },
    ],
    start_datetime: "2023-10-05",
    end_datetime: "2023-11-05",
  },
];

enum EProjectChangePollSample1Options {
  HIPHOP = "Hip-Hop",
  SALSA = "Salsa",
  BREAKDANCE = "Breakdance",
  CONTEMPORARY = "Contemporary",
  TANGO = "Tango",
}

export const mockProjectChangePolls1: Array<IDecisionMakingPoll> = [
  {
    idx: 1,
    project_dao_id: mockProjectsData[5].address,
    question:
      "What dance styles should our AI dancers groove to? Cast your vote!",
    options: [
      EProjectChangePollSample1Options.HIPHOP,
      EProjectChangePollSample1Options.SALSA,
      EProjectChangePollSample1Options.BREAKDANCE,
      EProjectChangePollSample1Options.CONTEMPORARY,
      EProjectChangePollSample1Options.TANGO,
    ],
    voter_map: [
      { key: "1", vote: EProjectChangePollSample1Options.HIPHOP },
      { key: "2", vote: EProjectChangePollSample1Options.CONTEMPORARY },
      { key: "3", vote: EProjectChangePollSample1Options.SALSA },
      { key: "4", vote: EProjectChangePollSample1Options.SALSA },
      { key: "5", vote: EProjectChangePollSample1Options.CONTEMPORARY },
      { key: "6", vote: EProjectChangePollSample1Options.HIPHOP },
      { key: "7", vote: EProjectChangePollSample1Options.HIPHOP },
      { key: "8", vote: EProjectChangePollSample1Options.HIPHOP },
      { key: "9", vote: EProjectChangePollSample1Options.TANGO },
      { key: "10", vote: EProjectChangePollSample1Options.HIPHOP },
      { key: "11", vote: EProjectChangePollSample1Options.CONTEMPORARY },
      { key: "12", vote: EProjectChangePollSample1Options.HIPHOP },
      { key: "13", vote: EProjectChangePollSample1Options.TANGO },
    ],
    start_datetime: "2023-10-02",
    end_datetime: "2023-11-06",
  },
];

enum EProjectChangePollSample2Options {
  SCIFI = "Sci-Fi Extravaganza",
  TIME_TRAVEL = "Time-Travel Tango",
  DISCO_FEVER = "Disco Fever",
  FANTASY = "Fantasy Frenzy",
  RETRO = "Retro Rewind",
}

export const mockProjectChangePolls2: Array<IDecisionMakingPoll> = [
  {
    idx: 1,
    project_dao_id: mockProjectsData[5].address,
    question: "Pick the themes for our upcoming dance battles!",
    options: [
      EProjectChangePollSample2Options.SCIFI,
      EProjectChangePollSample2Options.TIME_TRAVEL,
      EProjectChangePollSample2Options.DISCO_FEVER,
      EProjectChangePollSample2Options.FANTASY,
      EProjectChangePollSample2Options.RETRO,
    ],
    voter_map: [
      { key: "1", vote: EProjectChangePollSample2Options.SCIFI },
      { key: "2", vote: EProjectChangePollSample2Options.DISCO_FEVER },
      { key: "3", vote: EProjectChangePollSample2Options.FANTASY },
      { key: "4", vote: EProjectChangePollSample2Options.DISCO_FEVER },
      { key: "5", vote: EProjectChangePollSample2Options.FANTASY },
      { key: "6", vote: EProjectChangePollSample2Options.RETRO },
      { key: "7", vote: EProjectChangePollSample2Options.TIME_TRAVEL },
      { key: "8", vote: EProjectChangePollSample2Options.SCIFI },
      { key: "9", vote: EProjectChangePollSample2Options.TIME_TRAVEL },
      { key: "10", vote: EProjectChangePollSample2Options.TIME_TRAVEL },
      { key: "11", vote: EProjectChangePollSample2Options.SCIFI },
      { key: "12", vote: EProjectChangePollSample2Options.DISCO_FEVER },
      { key: "13", vote: EProjectChangePollSample2Options.TIME_TRAVEL },
    ],
    start_datetime: "2023-10-16",
    end_datetime: "2023-12-06",
  },
];
