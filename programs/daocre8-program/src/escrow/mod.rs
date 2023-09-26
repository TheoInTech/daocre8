use anchor_lang::prelude::*;
use solana_program::{
    system_instruction, 
    program::invoke,
};
use crate::errors::*;

pub mod state;
use state::*;

pub fn initialize_escrow(ctx: Context<InitializeEscrow>, amount: u64) -> Result<()> {
    let escrow_account = &mut ctx.accounts.escrow_account;
    escrow_account.authority = ctx.accounts.authority.key();
    escrow_account.recipient = ctx.accounts.recipient.key();
    escrow_account.amount = amount;

    // Create a transfer instruction
    let transfer_instruction = system_instruction::transfer(
        &ctx.accounts.authority.key(),
        &ctx.accounts.escrow_account.to_account_info().key,
        amount,
    );

    // Invoke the transfer instruction
    invoke(
        &transfer_instruction,
        &[
            ctx.accounts.authority.to_account_info(),
            ctx.accounts.escrow_account.to_account_info().clone(),
            ctx.accounts.system_program.to_account_info(),
        ],
    )?;

    Ok(())
}

#[derive(Accounts)]
pub struct InitializeEscrow<'info> {
    #[account(mut)]
    pub authority: Signer<'info>, // This will be the creator of the project
    /// CHECK: The recipient field is simply storing an account and does not need any constraints.
    pub recipient: AccountInfo<'info>, // This is where the SOL will go after project completion
    #[account(
        init,
        payer = authority,
        space = 8 + std::mem::size_of::<EscrowAccount>(),
    )]
    pub escrow_account: Account<'info, EscrowAccount>, // The new escrow account being initialized
    pub system_program: Program<'info, System>,
}