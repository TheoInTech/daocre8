use anchor_lang::prelude::*;

#[account]
pub struct RecipientAccount {
    pub recipient: Pubkey,
}

#[account]
pub struct EscrowAccount {
    pub authority: Pubkey, // The Project DAO Authority who will get the refunded 50% of SOL after project completion / closure
    pub recipient: Pubkey, // The recipient of 50% of SOL which is the team behind DAOCre-8
    pub amount: u64, // The amount of staked SOL
}
