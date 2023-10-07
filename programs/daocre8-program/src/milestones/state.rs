use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct MilestoneAccount {
    pub authority: Pubkey,
    pub idx: u8,
    pub project_dao_id: Pubkey,
    pub percentage: u128,
    pub milestone_ipfs_hash: String,
}
