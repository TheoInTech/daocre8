use anchor_lang::prelude::*;
use crate::errors::*;

pub mod constants;
pub mod state;
pub use crate::project_dao::{ constants::*, state::* };

/// Initializes a Project DAO with a given `project_ipfs_hash`.
///
/// The `project_ipfs_hash` should correspond to an Arweave or IPFS address where a JSON object, adhering strictly to the below-described schema, is stored.
///
/// # Schema: FormDataSchema
/// The JSON object must conform to the following precise schema:
///
/// ## Main Object
/// - `category`: string, required, must be one of ["Art", "Comics", "Crafts", "Dance", "Fashion", "Films & Video", "Food", "Games", "Hardware", "Journalism", "Music", "Photography", "Software", "Theater"]
/// - `basicDetails`: object, required, must follow the `BasicDetailsSchema` described below.
/// - `team`: object, required, must follow the `TeamSchema` described below.
/// - `fundingTiers`: array, required, each element must follow the `FundingTierSchema` described below.
/// - `fundingAndMilestones`: object, required, must follow the `FundingAndMilestonesSchema` described below.
///
/// ## BasicDetailsSchema
/// - `name`: string, required, the name of the project.
/// - `location`: string, required, must be one of ["Singapore", "Philippines", "USA", "Europe"].
/// - `imageUrl`: string, required, must be a valid URL (the image should be of types ["jpeg", "jpg", "png", "webp"] and max size 5MB).
/// - `pdfUrl`: string, required, must be a valid URL to a PDF document (max size 10MB).
/// - `videoUrl`: string, optional, must be a valid URL to a video if provided (the video should be of types ["mp4", "mov", "avi", "mkv", "webm"] and max size 100MB).
///
/// ## TeamSchema
/// - `undoxxed`: boolean, required.
/// - `name`: string, required if `undoxxed` is false.
/// - `about`: string, required if `undoxxed` is false.
/// - `linkedinUrl`: string, optional.
/// - `githubUrl`: string, optional.
/// - `xUrl`: string, optional.
/// - `pastProjectUrl`: string, optional.
/// - `teamProfileUrls`: array of strings, optional, each string must be a valid URL.
///
/// ## FundingTierSchema
/// - `name`: string, required.
/// - `amountInUsd`: number, required, minimum 1.
/// - `description`: string, required, max 250 characters.
/// - `imageUrl`: string, required, must be a valid URL (the image should be of types ["jpeg", "jpg", "png", "webp"] and max size 5MB).
///
/// ## FundingAndMilestonesSchema
/// - `fundingAmount`: number, required, minimum 1.
/// - `walletAddress`: string, required, must be a valid Solana address.
/// - `walletIsConfirmed`: boolean, required, must be true.
/// - `currency`: string, required, must be one of ["SOL", "USDC", "USDT", "USD"].
/// - `capitalPercentage`: number, required, between 1 and 100 inclusive.
/// - `milestones`: array, required, each element must be an object with the following properties:
///     - `percentage`: number, required, between 1 and 100 inclusive.
///     - `description`: string, required.
///
/// # Example
/// ```json
/// {
///    "category": "Art",
///    "basicDetails": {...},
///    "team": {...},
///    "fundingTiers": [...],
///    "fundingAndMilestones": {...}
/// }
/// ```
///
/// # Errors
/// Returns `FieldNotEmpty` error if `project_ipfs_hash` is empty.
pub fn initialize_project_dao(
    ctx: Context<InitializeProjectDao>,
    project_ipfs_hash: String
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
