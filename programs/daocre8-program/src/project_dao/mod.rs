use anchor_lang::prelude::*;

pub mod constant;
pub mod state;
use crate::creator::{constant::*, state::*};
use crate::errors::*;
use crate::project_dao::{constant::*, state::*};

pub fn initialize_project_dao(
    ctx: Context<InitializeProjectDao>,
    project_ipfs_hash: String,
    fundraise_end_date: i64,
    launch_date: i64,
    funding_amount: u128,
    capital_percentage: u128,
) -> Result<()> {
    // Check if any of the fields are empty
    if project_ipfs_hash.is_empty()
        || fundraise_end_date == 0
        || launch_date == 0
        || funding_amount == 0
        || capital_percentage == 0
    {
        return Err(DAOCre8Error::FieldNotEmpty.into());
    }

    let project_dao_account = &mut ctx.accounts.project_dao_account;

    // Populate the Project DAO Account PDA fields
    project_dao_account.authority = ctx.accounts.authority.key();
    project_dao_account.project_ipfs_hash = project_ipfs_hash;
    project_dao_account.fundraise_end_date = fundraise_end_date;
    project_dao_account.launch_date = launch_date;
    project_dao_account.funding_amount = funding_amount;
    project_dao_account.capital_percentage = capital_percentage;

    // Initial Milestones
    project_dao_account.last_milestone = 0;
    project_dao_account.milestones_count = 0;

    // Initial Polls
    project_dao_account.last_decision_poll = 0;
    project_dao_account.last_milestone_poll = 0;
    project_dao_account.decision_polls_count = 0;
    project_dao_account.milestone_polls_count = 0;

    msg!(
        "Initialized Project DAO {} with Metadata, Milestones, and Polls",
        project_dao_account.key()
    );
    Ok(())
}

#[derive(Accounts)]
#[instruction()]
pub struct InitializeProjectDao<'info> {
    #[account(
        mut,
        seeds = [
            CREATOR_TAG,
            authority.key().as_ref()
        ],
        bump,
        has_one = authority,
    )]
    pub creator_profile: Box<Account<'info, CreatorProfile>>,

    #[account(
        init,
        seeds = [
            PROJECT_DAO_TAG,
            creator_profile.key().as_ref(),
            &[creator_profile.last_project_dao as u8].as_ref()
        ],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<ProjectDaoAccount>()
    )]
    pub project_dao_account: Box<Account<'info, ProjectDaoAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn bump(seeds: &[&[u8]], program_id: &Pubkey) -> u8 {
    let (_found_key, bump) = Pubkey::find_program_address(seeds, program_id);
    bump
}
