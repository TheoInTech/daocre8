use anchor_lang::prelude::*;
use crate::errors::*;

pub mod state;
pub mod constants;
use {state::*, constants::*};

pub fn initialize_project_dao(
    ctx: Context<InitializeProjectDao>,
    project_ipfs_hash: String,
) -> Result<()> {
    if project_ipfs_hash.is_empty() {
        return Err(DAOCre8Error::FieldNotEmpty.into());
    }

    let project_dao_account = &mut ctx.accounts.project_dao_account;

    project_dao_account.authority = ctx.accounts.authority.key();
    project_dao_account.project_ipfs_hash = project_ipfs_hash;

    msg!("Initialized Project DAO with Metadata");
    Ok(())
}

#[derive(Accounts)]
#[instruction(
    project_ipfs_hash: String,
)]
pub struct InitializeProjectDao<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,

    #[account(
        init,
        seeds = [PROJECT_DAO_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<ProjectDaoAccount>()
    )]
    pub project_dao_account: Box<Account<'info, ProjectDaoAccount>>,

    pub system_program: Program<'info, System>,
}
