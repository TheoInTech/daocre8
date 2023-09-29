export type Daocre8 = {
  version: "0.1.0";
  name: "daocre8";
  constants: [
    {
      name: "PROJECT_DAO_TAG";
      type: "bytes";
      value: "[80, 82, 79, 74, 69, 67, 84, 95, 68, 65, 79, 95, 83, 84, 65, 84, 69]";
    }
  ];
  instructions: [
    {
      name: "initializeProjectDao";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "projectDaoAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "projectIpfsHash";
          type: "string";
        }
      ];
    },
    {
      name: "initializeEscrow";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "recipientAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowAccount";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "initializeRecipient";
      accounts: [
        {
          name: "recipientAccount";
          isMut: true;
          isSigner: true;
        },
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "recipient";
          type: "publicKey";
        }
      ];
    },
    {
      name: "updateRecipient";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "recipientAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrowAccount";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "newRecipient";
          type: "publicKey";
        }
      ];
    },
    {
      name: "initializeDecisionMakingPoll";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "decisionMakingPoll";
          isMut: true;
          isSigner: true;
        },
        {
          name: "projectDaoAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "question";
          type: "string";
        },
        {
          name: "options";
          type: {
            vec: "string";
          };
        },
        {
          name: "startDatetime";
          type: "i64";
        },
        {
          name: "endDatetime";
          type: "i64";
        }
      ];
    },
    {
      name: "initializeMilestoneAchievementPoll";
      accounts: [
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "milestoneAchievementPoll";
          isMut: true;
          isSigner: true;
        },
        {
          name: "projectDaoAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "milestoneId";
          type: "u8";
        },
        {
          name: "startDatetime";
          type: "i64";
        },
        {
          name: "endDatetime";
          type: "i64";
        }
      ];
    },
    {
      name: "voteInDecisionMakingPoll";
      accounts: [
        {
          name: "voter";
          isMut: true;
          isSigner: true;
        },
        {
          name: "decisionMakingPoll";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "optionIndex";
          type: "u8";
        }
      ];
    },
    {
      name: "voteInMilestoneAchievementPoll";
      accounts: [
        {
          name: "voter";
          isMut: true;
          isSigner: true;
        },
        {
          name: "milestoneAchievementPoll";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "vote";
          type: "bool";
        }
      ];
    },
    {
      name: "initializeCreatorNftCollection";
      accounts: [
        {
          name: "nftCollection";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "title";
          type: "string";
        },
        {
          name: "description";
          type: "string";
        },
        {
          name: "imageUri";
          type: "string";
        }
      ];
    },
    {
      name: "mintCreatorNft";
      accounts: [
        {
          name: "nft";
          isMut: true;
          isSigner: true;
        },
        {
          name: "nftCollection";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "projectDaoId";
          type: "publicKey";
        }
      ];
    },
    {
      name: "upgradeCreatorNftRarity";
      accounts: [
        {
          name: "nftAccount";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
    }
  ];
  accounts: [
    {
      name: "creatorNftCollection";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "metadata";
            type: {
              defined: "CreatorMetadata";
            };
          }
        ];
      };
    },
    {
      name: "creatorNft";
      type: {
        kind: "struct";
        fields: [
          {
            name: "collection";
            type: "publicKey";
          },
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "projectDaoId";
            type: "publicKey";
          },
          {
            name: "rarity";
            type: {
              defined: "Rarity";
            };
          }
        ];
      };
    },
    {
      name: "recipientAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "recipient";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "escrowAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "recipient";
            type: "publicKey";
          },
          {
            name: "amount";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "decisionMakingPoll";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "projectDaoId";
            type: "publicKey";
          },
          {
            name: "question";
            type: "string";
          },
          {
            name: "options";
            type: {
              vec: "string";
            };
          },
          {
            name: "voterMap";
            type: {
              vec: {
                defined: "DecisionMakingPollVoterMap";
              };
            };
          },
          {
            name: "startDatetime";
            type: "i64";
          },
          {
            name: "endDatetime";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "milestoneAchievementPoll";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "projectDaoId";
            type: "publicKey";
          },
          {
            name: "milestoneId";
            type: "u8";
          },
          {
            name: "voterMap";
            type: {
              vec: {
                defined: "MilestoneAchievementPollVoterMap";
              };
            };
          },
          {
            name: "startDatetime";
            type: "i64";
          },
          {
            name: "endDatetime";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "projectDaoAccount";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "projectIpfsHash";
            type: "string";
          },
          {
            name: "polls";
            type: {
              vec: {
                defined: "PollType";
              };
            };
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "CreatorMetadata";
      type: {
        kind: "struct";
        fields: [
          {
            name: "title";
            type: "string";
          },
          {
            name: "description";
            type: "string";
          },
          {
            name: "imageUri";
            type: "string";
          }
        ];
      };
    },
    {
      name: "DecisionMakingPollVoterMap";
      type: {
        kind: "struct";
        fields: [
          {
            name: "key";
            type: "publicKey";
          },
          {
            name: "vote";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "MilestoneAchievementPollVoterMap";
      type: {
        kind: "struct";
        fields: [
          {
            name: "key";
            type: "publicKey";
          },
          {
            name: "vote";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "Rarity";
      type: {
        kind: "enum";
        variants: [
          {
            name: "Starter";
          },
          {
            name: "Builder";
          },
          {
            name: "Innovator";
          },
          {
            name: "Visionary";
          },
          {
            name: "Legend";
          }
        ];
      };
    },
    {
      name: "PollType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "DecisionMaking";
          },
          {
            name: "MilestoneAchievement";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "Unauthorized";
      msg: "You are not authorized to perform this action.";
    },
    {
      code: 6001;
      name: "NotAllowed";
      msg: "Not allowed.";
    },
    {
      code: 6002;
      name: "FieldNotEmpty";
      msg: "Field can not be empty.";
    },
    {
      code: 6003;
      name: "InvalidPollInput";
      msg: "Invalid poll input.";
    },
    {
      code: 6004;
      name: "InvalidOptionIndex";
      msg: "Invalid option index.";
    },
    {
      code: 6005;
      name: "VoterAlreadyVoted";
      msg: "Backer has already voted.";
    },
    {
      code: 6006;
      name: "InvalidDeposit";
      msg: "Please deposit exactly 1 SOL.";
    },
    {
      code: 6007;
      name: "ProjectIdMismatch";
      msg: "Project ID does not match any records";
    }
  ];
};

export const IDL: Daocre8 = {
  version: "0.1.0",
  name: "daocre8",
  constants: [
    {
      name: "PROJECT_DAO_TAG",
      type: "bytes",
      value:
        "[80, 82, 79, 74, 69, 67, 84, 95, 68, 65, 79, 95, 83, 84, 65, 84, 69]",
    },
  ],
  instructions: [
    {
      name: "initializeProjectDao",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "projectDaoAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "projectIpfsHash",
          type: "string",
        },
      ],
    },
    {
      name: "initializeEscrow",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "recipientAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowAccount",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "initializeRecipient",
      accounts: [
        {
          name: "recipientAccount",
          isMut: true,
          isSigner: true,
        },
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "recipient",
          type: "publicKey",
        },
      ],
    },
    {
      name: "updateRecipient",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "recipientAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrowAccount",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "newRecipient",
          type: "publicKey",
        },
      ],
    },
    {
      name: "initializeDecisionMakingPoll",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "decisionMakingPoll",
          isMut: true,
          isSigner: true,
        },
        {
          name: "projectDaoAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "question",
          type: "string",
        },
        {
          name: "options",
          type: {
            vec: "string",
          },
        },
        {
          name: "startDatetime",
          type: "i64",
        },
        {
          name: "endDatetime",
          type: "i64",
        },
      ],
    },
    {
      name: "initializeMilestoneAchievementPoll",
      accounts: [
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "milestoneAchievementPoll",
          isMut: true,
          isSigner: true,
        },
        {
          name: "projectDaoAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "milestoneId",
          type: "u8",
        },
        {
          name: "startDatetime",
          type: "i64",
        },
        {
          name: "endDatetime",
          type: "i64",
        },
      ],
    },
    {
      name: "voteInDecisionMakingPoll",
      accounts: [
        {
          name: "voter",
          isMut: true,
          isSigner: true,
        },
        {
          name: "decisionMakingPoll",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "optionIndex",
          type: "u8",
        },
      ],
    },
    {
      name: "voteInMilestoneAchievementPoll",
      accounts: [
        {
          name: "voter",
          isMut: true,
          isSigner: true,
        },
        {
          name: "milestoneAchievementPoll",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "vote",
          type: "bool",
        },
      ],
    },
    {
      name: "initializeCreatorNftCollection",
      accounts: [
        {
          name: "nftCollection",
          isMut: true,
          isSigner: true,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "description",
          type: "string",
        },
        {
          name: "imageUri",
          type: "string",
        },
      ],
    },
    {
      name: "mintCreatorNft",
      accounts: [
        {
          name: "nft",
          isMut: true,
          isSigner: true,
        },
        {
          name: "nftCollection",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "projectDaoId",
          type: "publicKey",
        },
      ],
    },
    {
      name: "upgradeCreatorNftRarity",
      accounts: [
        {
          name: "nftAccount",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
  ],
  accounts: [
    {
      name: "creatorNftCollection",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "metadata",
            type: {
              defined: "CreatorMetadata",
            },
          },
        ],
      },
    },
    {
      name: "creatorNft",
      type: {
        kind: "struct",
        fields: [
          {
            name: "collection",
            type: "publicKey",
          },
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "projectDaoId",
            type: "publicKey",
          },
          {
            name: "rarity",
            type: {
              defined: "Rarity",
            },
          },
        ],
      },
    },
    {
      name: "recipientAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "recipient",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "escrowAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "recipient",
            type: "publicKey",
          },
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "decisionMakingPoll",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "projectDaoId",
            type: "publicKey",
          },
          {
            name: "question",
            type: "string",
          },
          {
            name: "options",
            type: {
              vec: "string",
            },
          },
          {
            name: "voterMap",
            type: {
              vec: {
                defined: "DecisionMakingPollVoterMap",
              },
            },
          },
          {
            name: "startDatetime",
            type: "i64",
          },
          {
            name: "endDatetime",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "milestoneAchievementPoll",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "projectDaoId",
            type: "publicKey",
          },
          {
            name: "milestoneId",
            type: "u8",
          },
          {
            name: "voterMap",
            type: {
              vec: {
                defined: "MilestoneAchievementPollVoterMap",
              },
            },
          },
          {
            name: "startDatetime",
            type: "i64",
          },
          {
            name: "endDatetime",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "projectDaoAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "projectIpfsHash",
            type: "string",
          },
          {
            name: "polls",
            type: {
              vec: {
                defined: "PollType",
              },
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "CreatorMetadata",
      type: {
        kind: "struct",
        fields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "imageUri",
            type: "string",
          },
        ],
      },
    },
    {
      name: "DecisionMakingPollVoterMap",
      type: {
        kind: "struct",
        fields: [
          {
            name: "key",
            type: "publicKey",
          },
          {
            name: "vote",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "MilestoneAchievementPollVoterMap",
      type: {
        kind: "struct",
        fields: [
          {
            name: "key",
            type: "publicKey",
          },
          {
            name: "vote",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "Rarity",
      type: {
        kind: "enum",
        variants: [
          {
            name: "Starter",
          },
          {
            name: "Builder",
          },
          {
            name: "Innovator",
          },
          {
            name: "Visionary",
          },
          {
            name: "Legend",
          },
        ],
      },
    },
    {
      name: "PollType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "DecisionMaking",
          },
          {
            name: "MilestoneAchievement",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "Unauthorized",
      msg: "You are not authorized to perform this action.",
    },
    {
      code: 6001,
      name: "NotAllowed",
      msg: "Not allowed.",
    },
    {
      code: 6002,
      name: "FieldNotEmpty",
      msg: "Field can not be empty.",
    },
    {
      code: 6003,
      name: "InvalidPollInput",
      msg: "Invalid poll input.",
    },
    {
      code: 6004,
      name: "InvalidOptionIndex",
      msg: "Invalid option index.",
    },
    {
      code: 6005,
      name: "VoterAlreadyVoted",
      msg: "Backer has already voted.",
    },
    {
      code: 6006,
      name: "InvalidDeposit",
      msg: "Please deposit exactly 1 SOL.",
    },
    {
      code: 6007,
      name: "ProjectIdMismatch",
      msg: "Project ID does not match any records",
    },
  ],
};
