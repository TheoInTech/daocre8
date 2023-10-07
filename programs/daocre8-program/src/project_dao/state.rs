use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct ProjectDaoAccount {
    pub authority: Pubkey,
    pub idx: u8,
    pub project_ipfs_hash: String,
    pub fundraise_end_date: i64,
    pub launch_date: i64,
    pub funding_amount: u128,
    pub capital_percentage: u128,
    // Milestone
    pub last_milestone: u8,
    pub milestones_count: u8,
    // Polls
    pub last_decision_poll: u8,
    pub last_milestone_poll: u8,
    pub decision_polls_count: u8,
    pub milestone_polls_count: u8,
}
