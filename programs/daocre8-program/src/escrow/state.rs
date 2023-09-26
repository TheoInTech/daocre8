use anchor_lang::prelude::*;

#[account]
pub struct EscrowAccount {
    pub authority: Pubkey,  // The Project DAO Authority who can refund the staked SOL
    pub recipient: Pubkey,  // The recipient of the SOL after project completion
    pub amount: u64,        // The amount of staked SOL
}
