use anchor_lang::prelude::*;
use std::str::FromStr;

pub mod constant;
pub mod state;
use crate::creator::{constant::*, state::*};
use crate::errors::*;
use crate::milestones::{constant::*, state::*};
use crate::project_dao::{constant::*, state::*};

pub fn initialize_milestone(
    ctx: Context<InitializeMilestone>,
    project_dao: Pubkey,
    percentage: u128,
    milestone_ipfs_hash: String,
) -> Result<()> {
    // Check if the milestone args are not empty
    if project_dao == Pubkey::default() || milestone_ipfs_hash.is_empty() {
        return Err(DAOCre8Error::FieldNotEmpty.into());
    }

    // Convert the project_dao string to a Pubkey
    let project_dao_account = &mut ctx.accounts.project_dao_account;

    let milestone_account = &mut ctx.accounts.milestone_account;
    let creator_profile = &mut ctx.accounts.creator_profile;

    // Check if the creator profile is the authority for the Project DAO that they're adding a milestone into
    if project_dao_account.authority != creator_profile.authority {
        return Err(DAOCre8Error::Unauthorized.into());
    }

    // Populate the Milestone Account PDA the fields
    milestone_account.authority = ctx.accounts.authority.key();
    milestone_account.project_dao_id = project_dao_account.key();
    milestone_account.idx = project_dao_account.last_milestone;
    milestone_account.percentage = percentage;
    milestone_account.milestone_ipfs_hash = milestone_ipfs_hash;

    // Increase milestone idx for Project DAO Account PDA
    project_dao_account.last_milestone = project_dao_account.last_milestone.checked_add(1).unwrap();

    // Increase total milestones count
    project_dao_account.milestones_count =
        project_dao_account.milestones_count.checked_add(1).unwrap();

    msg!(
        "Initialized milestone {} for project {}",
        milestone_account.key(),
        project_dao,
    );
    Ok(())
}

#[derive(Accounts)]
#[instruction(
    project_dao: Pubkey,
    percentage: u128,
    milestone_ipfs_hash: String,
)]
pub struct InitializeMilestone<'info> {
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
        mut,
        seeds = [
            PROJECT_DAO_TAG,
            creator_profile.key().as_ref(),
            &[creator_profile.last_project_dao as u8].as_ref()
        ],
        bump,
        has_one = authority,
    )]
    pub project_dao_account: Box<Account<'info, ProjectDaoAccount>>,

    #[account(
        init,
        seeds = [
            MILESTONES_TAG,
            project_dao.key().as_ref(),
            &[project_dao_account.last_milestone as u8].as_ref()
        ],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<MilestoneAccount>()
    )]
    pub milestone_account: Box<Account<'info, MilestoneAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn bump(seeds: &[&[u8]], program_id: &Pubkey) -> u8 {
    let (_found_key, bump) = Pubkey::find_program_address(seeds, program_id);
    bump
}
