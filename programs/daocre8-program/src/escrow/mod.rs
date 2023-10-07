use anchor_lang::prelude::*;
use solana_program::{program::invoke, system_instruction};

pub mod errors;
pub mod state;
use crate::errors::*;
use crate::escrow::state::*;

pub fn initialize_escrow(ctx: Context<InitializeEscrow>, amount: u64) -> Result<()> {
    // Ensure the amount is 1 SOL
    if amount != 1_000_000_000 {
        // 1 SOL is represented as 1_000_000_000 lamports
        return Err(DAOCre8Error::InvalidDeposit.into());
    }

    let escrow_account = &mut ctx.accounts.escrow_account;
    escrow_account.authority = ctx.accounts.authority.key();
    let recipient_account = &ctx.accounts.recipient_account;
    escrow_account.recipient = recipient_account.recipient;

    // Divide the amount by 2 for 50-50 distribution
    let half_amount = amount / 2;
    escrow_account.amount = half_amount; // Stake 50% to the escrow

    // Create a transfer instruction to transfer 50% to the recipient
    let transfer_instruction = system_instruction::transfer(
        &ctx.accounts.authority.key(),
        &recipient_account.recipient,
        half_amount,
    );

    // Invoke the transfer instruction
    invoke(
        &transfer_instruction,
        &[
            ctx.accounts.authority.to_account_info(),
            ctx.accounts.recipient_account.to_account_info().clone(),
            ctx.accounts.system_program.to_account_info(),
        ],
    )?;

    Ok(())
}

#[derive(Accounts)]
pub struct InitializeEscrow<'info> {
    #[account(mut)]
    pub authority: Signer<'info>, // This will be the creator of the project
    #[account(mut)]
    pub recipient_account: Account<'info, RecipientAccount>, // This is where the SOL will go after project completion
    #[account(init, payer = authority, space = 8 + std::mem::size_of::<EscrowAccount>())]
    pub escrow_account: Account<'info, EscrowAccount>, // The new escrow account being initialized
    pub system_program: Program<'info, System>,
}

pub fn initialize_recipient(ctx: Context<InitializeRecipient>, recipient: Pubkey) -> Result<()> {
    let recipient_account = &mut ctx.accounts.recipient_account;
    recipient_account.recipient = recipient;
    Ok(())
}

pub fn update_recipient(ctx: Context<UpdateRecipient>, new_recipient: Pubkey) -> Result<()> {
    let recipient_account = &mut ctx.accounts.recipient_account;
    recipient_account.recipient = new_recipient;

    let escrow_account = &mut ctx.accounts.escrow_account;
    escrow_account.recipient = new_recipient;

    Ok(())
}

#[derive(Accounts)]
pub struct InitializeRecipient<'info> {
    #[account(init, payer = admin, space = 8 + std::mem::size_of::<RecipientAccount>())]
    pub recipient_account: Account<'info, RecipientAccount>,
    #[account(mut)]
    pub admin: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateRecipient<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(mut)]
    pub recipient_account: Account<'info, RecipientAccount>,
    #[account(mut)]
    pub escrow_account: Account<'info, EscrowAccount>,
}
