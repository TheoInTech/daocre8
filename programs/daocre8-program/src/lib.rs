use anchor_lang::prelude::*;
use solana_program::{
    system_instruction, 
    program::invoke,
};

pub mod errors;
pub mod project_dao;
pub mod escrow;
pub mod polls;

use errors::*;
use project_dao::InitializeProjectDao;
use escrow::InitializeEscrow;
use polls::{
    state::VoteInDecisionMakingPoll,
    state::VoteInMilestoneAchievementPoll,
    state::InitializeDecisionMakingPoll,
    state::InitializeMilestoneAchievementPoll,
    types::PollType
};

declare_id!("ATqP7TbxPzSYd2nTbXo1usji5Ftq4QRae93SvDzD89yy");

#[program]
pub mod daocre8 {
    use super::*;

    // Initialize the Project DAO PDA
    pub fn initialize_project_dao(
        ctx: Context<InitializeProjectDao>,
        project_ipfs_hash: String,
    ) -> Result<()> {
        project_dao::initialize_project_dao(ctx, project_ipfs_hash)
    }

    pub fn initialize_escrow(ctx: Context<InitializeEscrow>, amount: u64) -> Result<()> {
        escrow::initialize_escrow(ctx, amount)
    }
    

    pub fn initialize_decision_making_poll(
        ctx: Context<InitializeDecisionMakingPoll>,
        question: String,
        options: Vec<String>,
        start_datetime: i64,
        end_datetime: i64,
    ) -> Result<()> {
        polls::initialize_decision_making_poll(
            ctx,
            question,
            options,
            start_datetime,
            end_datetime,
        )
    }

    pub fn initialize_milestone_achievement_poll(
        ctx: Context<InitializeMilestoneAchievementPoll>,
        milestone_id: u8,
        start_datetime: i64,
        end_datetime: i64,
    ) -> Result<()> {
        polls::initialize_milestone_achievement_poll(
            ctx,
            milestone_id,
            start_datetime,
            end_datetime,
        )
    }

    pub fn vote_in_decision_making_poll(
        ctx: Context<VoteInDecisionMakingPoll>,
        option_index: u8,
    ) -> Result<()> {
        polls::vote_in_decision_making_poll(ctx, option_index)
    }

    pub fn vote_in_milestone_achievement_poll(
        ctx: Context<VoteInMilestoneAchievementPoll>,
        vote: bool,
    ) -> Result<()> {
        polls::vote_in_milestone_achievement_poll(ctx, vote)
    }
}
