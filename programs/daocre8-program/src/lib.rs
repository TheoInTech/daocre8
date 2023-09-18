use anchor_lang::prelude::*;

pub mod constants;
pub mod errors;
pub mod poll_contexts;
pub mod poll_methods;
pub mod poll_types;
pub mod states;

use crate::{ constants::*, errors::*, poll_contexts::*, poll_methods::*, poll_types::*, states::* };

declare_id!("ATqP7TbxPzSYd2nTbXo1usji5Ftq4QRae93SvDzD89yy");

#[program]
pub mod daocre8 {
    use super::*;

    // Initialize the Project DAO PDA
    pub fn initialize_project_dao(
        ctx: Context<InitializeProjectDao>,
        basic_details_ipfs_hash: String,
        tiers_ipfs_hash: String,
        team_ipfs_hash: String,
        launch_date: i64,
        fundraise_end_date: i64,
        project_story_ipfs_hash: String,
        milestones_ipfs_hash: String,
        polls: Vec<PollType>
    ) -> Result<()> {
        let project_dao_account = &mut ctx.accounts.project_dao_account;

        project_dao_account.authority = ctx.accounts.authority.key();
        project_dao_account.basic_details_ipfs_hash = basic_details_ipfs_hash;
        project_dao_account.tiers_ipfs_hash = tiers_ipfs_hash;
        project_dao_account.team_ipfs_hash = Some(team_ipfs_hash);
        project_dao_account.launch_date = launch_date;
        project_dao_account.fundraise_end_date = fundraise_end_date;
        project_dao_account.project_story_ipfs_hash = project_story_ipfs_hash;
        project_dao_account.milestones_ipfs_hash = milestones_ipfs_hash;
        project_dao_account.polls = polls;

        msg!("Initialized Project DAO with Metadata");
        Ok(())
    }

    pub fn initialize_decision_making_poll(
        ctx: Context<InitializeDecisionMakingPoll>,
        question: String,
        options: Vec<String>,
        start_datetime: i64,
        end_datetime: i64
    ) -> Result<()> {
        poll_methods::initialize_decision_making_poll(
            ctx,
            question,
            options,
            start_datetime,
            end_datetime
        )
    }

    pub fn initialize_milestone_achievement_poll(
        ctx: Context<InitializeMilestoneAchievementPoll>,
        milestone_id: u8,
        start_datetime: i64,
        end_datetime: i64
    ) -> Result<()> {
        poll_methods::initialize_milestone_achievement_poll(
            ctx,
            milestone_id,
            start_datetime,
            end_datetime
        )
    }

    pub fn vote_in_decision_making_poll(
        ctx: Context<VoteInDecisionMakingPoll>,
        option_index: u8
    ) -> Result<()> {
        poll_methods::vote_in_decision_making_poll(ctx, option_index)
    }

    pub fn vote_in_milestone_achievement_poll(
        ctx: Context<VoteInMilestoneAchievementPoll>,
        vote: bool
    ) -> Result<()> {
        poll_methods::vote_in_milestone_achievement_poll(ctx, vote)
    }
}

#[derive(Accounts)]
#[instruction(
    basic_details_ipfs_hash: String,
    tiers_ipfs_hash: String,
    team_ipfs_hash: String,
    launch_date: i64,
    fundraise_end_date: i64,
    project_story_ipfs_hash: String,
    milestones_ipfs_hash: String,
    polls: Vec<PollType>,
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
