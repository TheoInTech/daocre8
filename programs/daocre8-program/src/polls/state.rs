use anchor_lang::prelude::*;

use crate::milestones::*;
use crate::project_dao::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct DecisionMakingPollVoterMap {
    pub key: Pubkey,
    pub vote: u8,
}

#[account]
#[derive(Default)]
pub struct DecisionMakingPollAccount {
    pub authority: Pubkey, // Creator of the DAO
    pub idx: u8,
    pub question: String,                           // Question to be polled out
    pub options: Vec<String>,                       // Options for the poll
    pub voter_map: Vec<DecisionMakingPollVoterMap>, // Mapping of voter to their selected option index
    pub start_datetime: i64,                        // Unix time and date to start the poll
    pub end_datetime: i64,                          // Unix time and date to end the poll
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct MilestoneAchievementPollVoterMap {
    pub key: Pubkey,
    pub vote: bool,
}

#[account]
#[derive(Default)]
pub struct MilestoneAchievementPollAccount {
    pub idx: u8,
    pub authority: Pubkey,                                // Creator of the DAO
    pub project_dao_id: Pubkey, // ID of the parent DAO - ProjectDAOAccount
    pub milestone_id: Pubkey,   // Milestone of the DAO - MilestoneAccount
    pub voter_map: Vec<MilestoneAchievementPollVoterMap>, // Mapping of voter to their vote (Yes/No)
    pub start_datetime: i64,    // Unix time and date to start the poll
    pub end_datetime: i64,      // Unix time and date to end the poll
}
