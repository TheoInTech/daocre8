use anchor_lang::prelude::*;

pub mod constant;
pub mod errors;
pub mod state;
use crate::creator::{constant::*, state::*};
use crate::errors::*;
use crate::milestones::{constant::*, state::*};
use crate::project_dao::{constant::*, state::*};

pub fn initialize_milestone(
    ctx: Context<InitializeMilestone>,
    project_dao: String,
    percentage: u128,
    milestone_ipfs_hash: String,
) -> Result<()> {
    // Check if the milestone args are not empty
    if project_dao.is_empty() || milestone_ipfs_hash.is_empty() {
        return Err(DAOCre8Error::FieldNotEmpty.into());
    }

    let milestone_account = &mut ctx.accounts.milestone_account;
    let creator_profile = &mut ctx.accounts.creator_profile;

    // Get the project DAO account using the "project_dao" arg which will be a String
    let project_dao_pubkey = Pubkey::new_from_array(&project_dao.parse().unwrap());
    let project_dao_account = &ctx.accounts.project_dao_account;
    let project_dao_account_info = project_dao_account
        .try_account_info(&ctx.program_id)
        .unwrap()
        .load_mut(&mut ctx.accounts, &project_dao_pubkey)?;

    // Check if the creator profile is the authority for the Project DAO that they're adding a milestone into
    if project_dao_account_info.authority != creator_profile.authority {
        return Err(DAOCre8Error::Unauthorized.into());
    }

    // Populate the Milestone Account PDA the fields
    milestone_account.authority = ctx.accounts.authority.key();
    milestone_account.project_dao_id = project_dao_pubkey;
    milestone_account.idx = project_dao_account_info.last_milestone;
    milestone_account.percentage = percentage;
    milestone_account.milestone_ipfs_hash = milestone_ipfs_hash;

    // Increase milestone idx for Project DAO Account PDA
    project_dao_account_info.last_milestone = project_dao_account_info
        .last_milestone
        .checked_add(1)
        .unwrap();

    // Increase total milestones count
    project_dao_account_info.milestones_count = project_dao_account_info
        .milestones_count
        .checked_add(1)
        .unwrap();

    msg!(
        "Initialized milestone {} for project {}",
        milestones_account.key(),
        project_dao,
    );
    Ok(())
}

#[derive(Accounts)]
#[instruction()]
pub struct InitializeMilestone<'info> {
    #[account(
        mut,
        seeds = [CREATOR_TAG, authority.key().as_ref()],
        bump,
        has_one = authority,
    )]
    pub creator_profile: Box<Account<'info, CreatorProfile>>,

    #[account(
        init,
        seeds = [PROJECT_DAO_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<ProjectDaoAccount>()
    )]
    pub project_dao_account: Box<Account<'info, ProjectDaoAccount>>,

    #[account(
        init,
        seeds = [MILESTONES_TAG, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<MilestoneAccount>()
    )]
    pub milestone_account: Box<Account<'info, MilestoneAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}
