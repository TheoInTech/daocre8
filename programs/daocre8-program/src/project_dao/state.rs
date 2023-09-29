use anchor_lang::prelude::*;

use crate::polls::types::PollType;

#[account]
#[derive(Default)]
pub struct ProjectDaoAccount {
    pub authority: Pubkey,
    pub project_ipfs_hash: String,
    pub polls: Vec<PollType>, // Polls
}
