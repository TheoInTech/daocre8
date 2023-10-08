use anchor_lang::prelude::*;

pub mod constant;
pub mod state;
use crate::creator::{constant::*, state::*};
use crate::errors::*;
use crate::milestones::{constant::*, state::*};
use crate::polls::{constant::*, state::*};
use crate::project_dao::{constant::*, state::*};

pub fn initialize_decision_making_poll(
    ctx: Context<InitializeDecisionMakingPollAccount>,
    project_dao: Pubkey,
    question: String,
    options: Vec<String>,
    start_datetime: i64,
    end_datetime: i64,
) -> Result<()> {
    let poll = &mut ctx.accounts.decision_making_poll;
    let project_dao_account = &mut ctx.accounts.project_dao_account;

    poll.authority = ctx.accounts.authority.key();
    poll.idx = project_dao_account.last_decision_poll;
    poll.question = question;
    poll.options = options;
    poll.start_datetime = start_datetime;
    poll.end_datetime = end_datetime;

    // Increase decision poll idx for Project DAO Account PDA
    project_dao_account.last_decision_poll = project_dao_account
        .last_decision_poll
        .checked_add(1)
        .unwrap();

    // Increase total decision poll count
    project_dao_account.decision_polls_count = project_dao_account
        .decision_polls_count
        .checked_add(1)
        .unwrap();

    Ok(())
}

pub fn vote_in_decision_making_poll(
    ctx: Context<VoteInDecisionMakingPoll>,
    option_index: u8,
) -> Result<()> {
    let decision_making_poll = &mut ctx.accounts.decision_making_poll;

    // Validation: Check if the provided index is valid
    if (option_index as usize) >= decision_making_poll.options.len() {
        return Err(DAOCre8Error::InvalidOptionIndex.into());
    }

    // Get the voter's public key
    let voter_pubkey = ctx.accounts.voter.key();

    // Check if this voter has already voted
    if decision_making_poll
        .voter_map
        .iter()
        .any(|voter_map| voter_map.key == voter_pubkey)
    {
        return Err(DAOCre8Error::VoterAlreadyVoted.into());
    }

    // Create a new DecisionMakingPollVoterMap instance
    let new_vote = DecisionMakingPollVoterMap {
        key: voter_pubkey,
        vote: option_index,
    };

    // Add the vote to the voter_map
    decision_making_poll.voter_map.push(new_vote);

    msg!("Vote registered for option index {}", option_index);

    Ok(())
}

pub fn initialize_milestone_achievement_poll(
    ctx: Context<InitializeMilestoneAchievementPollAccount>,
    project_dao: Pubkey,
    milestone_id: Pubkey,
    start_datetime: i64,
    end_datetime: i64,
) -> Result<()> {
    let poll = &mut ctx.accounts.milestone_achievement_poll;
    let project_dao_account = &mut ctx.accounts.project_dao_account;

    poll.authority = ctx.accounts.authority.key();
    poll.idx = project_dao_account.last_milestone;
    poll.milestone_id = milestone_id;
    poll.start_datetime = start_datetime;
    poll.end_datetime = end_datetime;

    // Increase milestones poll idx for Project DAO Account PDA
    project_dao_account.last_milestone_poll = project_dao_account
        .last_milestone_poll
        .checked_add(1)
        .unwrap();

    // Increase total milestones poll count
    project_dao_account.milestone_polls_count = project_dao_account
        .milestone_polls_count
        .checked_add(1)
        .unwrap();

    Ok(())
}

pub fn vote_in_milestone_achievement_poll(
    ctx: Context<VoteInMilestoneAchievementPoll>,
    vote: bool,
) -> Result<()> {
    // Fetch the milestone achievement poll account from the context
    let milestone_achievement_poll = &mut ctx.accounts.milestone_achievement_poll;

    // The public key of the voter
    let voter_pubkey = ctx.accounts.voter.key();

    // Check if this voter has already voted
    if milestone_achievement_poll
        .voter_map
        .iter()
        .any(|voter_map| voter_map.key == voter_pubkey)
    {
        return Err(DAOCre8Error::VoterAlreadyVoted.into());
    }

    // Create a new MilestoneAchievementPollVoterMap instance
    let new_vote = MilestoneAchievementPollVoterMap {
        key: voter_pubkey,
        vote,
    };

    // Record the vote
    milestone_achievement_poll.voter_map.push(new_vote);

    msg!("Vote registered: {}", if vote { "Yes" } else { "No" });

    Ok(())
}

#[derive(Accounts)]
#[instruction(
    project_dao: Pubkey,
    question: String,
    options: Vec<String>,
    start_datetime: i64,
    end_datetime: i64,
)]
pub struct InitializeDecisionMakingPollAccount<'info> {
    #[account(
        mut,
        seeds = [CREATOR_TAG, authority.key().as_ref()],
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
            DECISION_POLLS_TAG,
            project_dao.as_ref(),
            &[project_dao_account.last_decision_poll as u8].as_ref()
        ],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<DecisionMakingPollAccount>()
    )]
    pub decision_making_poll: Box<Account<'info, DecisionMakingPollAccount>>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(
    project_dao: Pubkey,
    milestone_id: Pubkey,
    start_datetime: i64,
    end_datetime: i64,
)]
pub struct InitializeMilestoneAchievementPollAccount<'info> {
    #[account(
        mut,
        seeds = [CREATOR_TAG, authority.key().as_ref()],
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
        mut,
        seeds = [
            MILESTONES_TAG,
            project_dao.as_ref(),
            &[project_dao_account.last_milestone as u8].as_ref()
        ],
        bump,
        has_one = authority,
    )]
    pub milestone_account: Box<Account<'info, MilestoneAccount>>,

    #[account(
        init,
        seeds = [
            MILESTONE_POLLS_TAG,
            project_dao.as_ref(),
            milestone_account.key().as_ref(),
            &[project_dao_account.last_milestone_poll as u8].as_ref()
        ],
        bump,
        payer = authority,
        space = 8 + std::mem::size_of::<MilestoneAchievementPollAccount>()
    )]
    pub milestone_achievement_poll: Account<'info, MilestoneAchievementPollAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction()]
pub struct VoteInDecisionMakingPoll<'info> {
    #[account(mut)]
    pub voter: Signer<'info>,
    pub decision_making_poll: Account<'info, DecisionMakingPollAccount>,
}

#[derive(Accounts)]
#[instruction()]
pub struct VoteInMilestoneAchievementPoll<'info> {
    #[account(mut)]
    pub voter: Signer<'info>,
    pub milestone_achievement_poll: Account<'info, MilestoneAchievementPollAccount>,
}

pub fn bump(seeds: &[&[u8]], program_id: &Pubkey) -> u8 {
    let (_found_key, bump) = Pubkey::find_program_address(seeds, program_id);
    bump
}
