use anchor_lang::prelude::*;

pub mod constant;
pub mod state;
use crate::creator::{constant::*, state::*};

pub fn initialize_creator(ctx: Context<InitializeCreator>) -> Result<()> {
    let creator_profile = &mut ctx.accounts.creator_profile;
    creator_profile.authority = ctx.accounts.authority.key();
    creator_profile.project_dao_count = 0;
    creator_profile.last_project_dao = 0;

    msg!("Initialized creator: {}", creator_profile.authority);
    Ok(())
}

#[derive(Accounts)]
#[instruction()]
pub struct InitializeCreator<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        init,
        seeds = [CREATOR_TAG,authority.key().as_ref()],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<CreatorProfile>(),
    )]
    pub creator_profile: Box<Account<'info, CreatorProfile>>,

    pub system_program: Program<'info, System>,
}
