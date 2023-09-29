use anchor_lang::prelude::*;
use solana_program::{ program::invoke, system_instruction };

pub mod errors;
pub mod escrow;
pub mod polls;
pub mod project_dao;

use crate::{ errors::*, escrow::*, polls::*, project_dao::* };

declare_id!("9vbWbujKchpAxbM7VbwdABXiURvEHbkFi32pMzPVtXci");

#[program]
pub mod daocre8 {
    use super::*;

    // Initialize the Project DAO PDA
    pub fn initialize_project_dao(
        ctx: Context<InitializeProjectDao>,
        project_ipfs_hash: String
    ) -> Result<()> {
        project_dao::initialize_project_dao(ctx, project_ipfs_hash);
        Ok(())
    }

    pub fn initialize_escrow(ctx: Context<InitializeEscrow>, amount: u64) -> Result<()> {
        escrow::initialize_escrow(ctx, amount);
        Ok(())
    }

    pub fn initialize_decision_making_poll(
        ctx: Context<InitializeDecisionMakingPoll>,
        question: String,
        options: Vec<String>,
        start_datetime: i64,
        end_datetime: i64
    ) -> Result<()> {
        polls::initialize_decision_making_poll(
            ctx,
            question,
            options,
            start_datetime,
            end_datetime
        );
        Ok(())
    }

    pub fn initialize_milestone_achievement_poll(
        ctx: Context<InitializeMilestoneAchievementPoll>,
        milestone_id: u8,
        start_datetime: i64,
        end_datetime: i64
    ) -> Result<()> {
        polls::initialize_milestone_achievement_poll(
            ctx,
            milestone_id,
            start_datetime,
            end_datetime
        );
        Ok(())
    }

    pub fn vote_in_decision_making_poll(
        ctx: Context<VoteInDecisionMakingPoll>,
        option_index: u8
    ) -> Result<()> {
        polls::vote_in_decision_making_poll(ctx, option_index);
        Ok(())
    }

    pub fn vote_in_milestone_achievement_poll(
        ctx: Context<VoteInMilestoneAchievementPoll>,
        vote: bool
    ) -> Result<()> {
        polls::vote_in_milestone_achievement_poll(ctx, vote);
        Ok(())
    }
}
