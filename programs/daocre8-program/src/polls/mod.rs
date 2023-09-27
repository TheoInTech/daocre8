use anchor_lang::prelude::*;
use crate::errors::*;

pub mod types;
pub mod state;
pub use { types::*, state::* };

pub fn initialize_decision_making_poll(
    ctx: Context<InitializeDecisionMakingPoll>,
    question: String,
    options: Vec<String>,
    start_datetime: i64,
    end_datetime: i64
) -> Result<()> {
    let poll = &mut ctx.accounts.decision_making_poll;
    poll.authority = ctx.accounts.authority.key();
    poll.project_dao_id = ctx.accounts.project_dao_account.to_account_info().key.clone();
    poll.question = question;
    poll.options = options;
    poll.start_datetime = start_datetime;
    poll.end_datetime = end_datetime;
    
    Ok(())
}

pub fn vote_in_decision_making_poll(
    ctx: Context<VoteInDecisionMakingPoll>,
    option_index: u8
) -> Result<()> {
    let decision_making_poll = &mut ctx.accounts.decision_making_poll;

    // Validation: Check if the provided index is valid
    if (option_index as usize) >= decision_making_poll.options.len() {
        return Err(DAOCre8Error::InvalidOptionIndex.into());
    }

    // Get the voter's public key
    let voter_pubkey = ctx.accounts.voter.key();

    // Add the vote to the voter_map
    decision_making_poll.voter_map.push((voter_pubkey, option_index));

    msg!("Vote registered for option index {}", option_index);

    Ok(())
}

pub fn initialize_milestone_achievement_poll(
    ctx: Context<InitializeMilestoneAchievementPoll>,
    milestone_id: u8,
    start_datetime: i64,
    end_datetime: i64
) -> Result<()> {
    let poll = &mut ctx.accounts.milestone_achievement_poll;
    poll.authority = ctx.accounts.authority.key();
    poll.project_dao_id = ctx.accounts.project_dao_account.to_account_info().key.clone();
    poll.milestone_id = milestone_id;
    poll.start_datetime = start_datetime;
    poll.end_datetime = end_datetime;
    Ok(())
}

pub fn vote_in_milestone_achievement_poll(
    ctx: Context<VoteInMilestoneAchievementPoll>,
    vote: bool
) -> Result<()> {
    // Fetch the milestone achievement poll account from the context
    let milestone_achievement_poll = &mut ctx.accounts.milestone_achievement_poll;

    // The public key of the voter
    let voter_pubkey = ctx.accounts.voter.key();

    // Check if this voter has already voted
    if milestone_achievement_poll.voter_map.iter().any(|(pubkey, _)| pubkey == &voter_pubkey) {
        return Err(DAOCre8Error::VoterAlreadyVoted.into());
    }

    // Record the vote
    milestone_achievement_poll.voter_map.push((voter_pubkey, vote));

    msg!("Vote registered: {}", if vote { "Yes" } else { "No" });

    Ok(())
}
