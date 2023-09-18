use anchor_lang::prelude::*;
use crate::poll_types::*;
use crate::states::*;

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
