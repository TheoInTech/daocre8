use anchor_lang::prelude::*;

use crate::poll_types::*;

#[account]
#[derive(Default)]
pub struct ProjectDaoAccount {
    pub authority: Pubkey,
    pub basic_details_ipfs_hash: String, // Project_name, category, location, logo, pitch_deck
    pub tiers_ipfs_hash: String, // Funding tiers with corresponding reward descriptions and images
    pub team_ipfs_hash: Option<String>, // Optional; information about the team
    pub launch_date: i64,        // Unix timestamp
    pub fundraise_end_date: i64, // Unix timestamp
    pub project_story_ipfs_hash: String, // Inspiration behind the project, photos and videos
    pub milestones_ipfs_hash: String, // Funding milestones
    pub polls: Vec<PollType>,    // Polls
}
