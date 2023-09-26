use anchor_lang::prelude::*;

use crate::project_dao::state::ProjectDaoAccount;

#[account]
pub struct DecisionMakingPoll {
    pub authority: Pubkey,            // Creator of the DAO
    pub project_dao_id: Pubkey,       // ID of the parent DAO
    pub question: String,             // Question to be polled out
    pub options: Vec<String>,         // Options for the poll
    pub voter_map: Vec<(Pubkey, u8)>, // Mapping of voter to their selected option index
    pub start_datetime: i64,          // Unix time and date to start the poll
    pub end_datetime: i64,            // Unix time and date to end the poll
}

#[account]
pub struct MilestoneAchievementPoll {
    pub authority: Pubkey,              // Creator of the DAO
    pub project_dao_id: Pubkey,         // ID of the parent DAO
    pub milestone_id: u8,               // Milestone of the DAO
    pub voter_map: Vec<(Pubkey, bool)>, // Mapping of voter to their vote (Yes/No)
    pub start_datetime: i64,            // Unix time and date to start the poll
    pub end_datetime: i64,              // Unix time and date to end the poll
}

#[derive(Accounts)]
pub struct InitializeDecisionMakingPoll<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(init, payer = authority, space = 8 + 128)]
    // Assuming a size of 128, adjust as necessary
    pub decision_making_poll: Account<'info, DecisionMakingPoll>,
    pub project_dao_account: Account<'info, ProjectDaoAccount>,
    pub system_program: Program<'info, System>,
}

// Context for initializing a MilestoneAchievementPoll
#[derive(Accounts)]
pub struct InitializeMilestoneAchievementPoll<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(init, payer = authority, space = 8 + 128)]
    // Assuming a size of 128, adjust as necessary
    pub milestone_achievement_poll: Account<'info, MilestoneAchievementPoll>,
    pub project_dao_account: Account<'info, ProjectDaoAccount>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct VoteInDecisionMakingPoll<'info> {
    #[account(mut)]
    pub voter: Signer<'info>,
    pub decision_making_poll: Account<'info, DecisionMakingPoll>,
}

#[derive(Accounts)]
pub struct VoteInMilestoneAchievementPoll<'info> {
    #[account(mut)]
    pub voter: Signer<'info>,
    pub milestone_achievement_poll: Account<'info, MilestoneAchievementPoll>,
}
