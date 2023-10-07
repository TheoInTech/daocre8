use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct CreatorProfile {
    pub authority: Pubkey,
    pub last_project_dao: u8,
    pub project_dao_count: u8,
}
