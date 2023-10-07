use anchor_lang::prelude::*;

pub mod state;
pub mod types;
use crate::milestones::state::*;
use crate::polls::types::*;
use crate::project_dao::state::*;

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct DecisionMakingPollVoterMap {
    pub key: Pubkey,
    pub vote: u8,
}

#[account]
pub struct DecisionMakingPollAccount {
    pub authority: Pubkey, // Creator of the DAO
    pub idx: u8,
    pub project_dao_id: Pubkey,                     // ID of the parent DAO
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
pub struct MilestoneAchievementPollAccount {
    pub idx: u8,
    pub authority: Pubkey,                                // Creator of the DAO
    pub project_dao_id: Pubkey, // ID of the parent DAO - ProjectDAOAccount
    pub milestone_id: Pubkey,   // Milestone of the DAO - MilestoneAccount
    pub voter_map: Vec<MilestoneAchievementPollVoterMap>, // Mapping of voter to their vote (Yes/No)
    pub start_datetime: i64,    // Unix time and date to start the poll
    pub end_datetime: i64,      // Unix time and date to end the poll
}

#[derive(Accounts)]
pub struct InitializeDecisionMakingPollAccount<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(init, payer = authority, space = 8 + 128)]
    // Assuming a size of 128, adjust as necessary
    pub decision_making_poll: Account<'info, DecisionMakingPollAccount>,
    pub project_dao_account: Account<'info, ProjectDaoAccount>,
    pub system_program: Program<'info, System>,
}

// Context for initializing a MilestoneAchievementPollAccount
#[derive(Accounts)]
pub struct InitializeMilestoneAchievementPollAccount<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(init, payer = authority, space = 8 + 128)]
    // Assuming a size of 128, adjust as necessary
    pub milestone_achievement_poll: Account<'info, MilestoneAchievementPollAccount>,
    pub project_dao_account: Account<'info, ProjectDaoAccount>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct VoteInDecisionMakingPoll<'info> {
    #[account(mut)]
    pub voter: Signer<'info>,
    pub decision_making_poll: Account<'info, DecisionMakingPollAccount>,
}

#[derive(Accounts)]
pub struct VoteInMilestoneAchievementPoll<'info> {
    #[account(mut)]
    pub voter: Signer<'info>,
    pub milestone_achievement_poll: Account<'info, MilestoneAchievementPollAccount>,
}
