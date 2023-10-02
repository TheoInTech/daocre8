use anchor_lang::prelude::*;

use crate::polls::types::PollType;

#[account]
#[derive(Default)]
pub struct MilestoneAccount {
    pub authority: Pubkey,
    pub project_dao: Pubkey,
}

#[account]
#[derive(Default)]
pub struct PollAccount {
    pub authority: Pubkey,
    pub project_dao: Pubkey,
}

#[account]
#[derive(Default)]
pub struct ProjectDaoAccount {
    pub authority: Pubkey,
    pub project_ipfs_hash: String,
}
