use anchor_lang::prelude::*;
use std::io::Read;

use borsh::{BorshDeserialize, BorshSerialize};

#[derive(Debug, Clone, PartialEq)]
pub enum PollType {
    DecisionMaking,
    MilestoneAchievement,
}

impl BorshSerialize for PollType {
    fn serialize<W: std::io::Write>(&self, writer: &mut W) -> std::io::Result<()> {
        match self {
            PollType::DecisionMaking => 0u8.serialize(writer),
            PollType::MilestoneAchievement => 1u8.serialize(writer),
        }
    }
}

impl BorshDeserialize for PollType {
    fn deserialize(buf: &mut &[u8]) -> std::io::Result<Self> {
        let n: u8 = BorshDeserialize::deserialize(buf)?;
        match n {
            0 => Ok(PollType::DecisionMaking),
            1 => Ok(PollType::MilestoneAchievement),
            _ => Err(std::io::Error::new(
                std::io::ErrorKind::InvalidData,
                "Unknown poll type",
            )),
        }
    }

    fn deserialize_reader<R: Read>(reader: &mut R) -> std::io::Result<Self> {
        let mut buf = [0u8; 1]; // Since we're reading one byte
        reader.read_exact(&mut buf)?;
        let n = buf[0];
        match n {
            0 => Ok(PollType::DecisionMaking),
            1 => Ok(PollType::MilestoneAchievement),
            _ => Err(std::io::Error::new(
                std::io::ErrorKind::InvalidData,
                "Unknown poll type",
            )),
        }
    }
}


