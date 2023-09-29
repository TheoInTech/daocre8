use anchor_lang::prelude::*;

pub mod state;
pub use crate::creator_nft::state::*;
use crate::errors::*;

pub fn initialize_creator_nft_collection(
    ctx: Context<InitializeCreatorNFTCollection>,
    title: String,
    description: String,
    image_uri: String
) -> Result<()> {
    let collection = &mut ctx.accounts.nft_collection;
    collection.authority = *ctx.accounts.authority.to_account_info().key;
    collection.metadata = CreatorMetadata {
        // Here, changed Metadata to CreatorMetadata
        title,
        description,
        image_uri,
    };
    Ok(())
}

pub fn mint_creator_nft(ctx: Context<MintCreatorNFT>, project_dao_id: Pubkey) -> Result<()> {
    let nft = &mut ctx.accounts.nft;
    let collection = &mut ctx.accounts.nft_collection;
    nft.collection = *collection.to_account_info().key;
    nft.owner = *ctx.accounts.owner.to_account_info().key;
    nft.project_dao_id = project_dao_id;
    nft.rarity = Rarity::Starter;
    Ok(())
}

pub fn upgrade_creator_nft_rarity(ctx: Context<UpgradeCreatorNFTRarity>) -> Result<()> {
    let nft_instance = &mut ctx.accounts.nft_account;
    nft_instance.rarity.upgrade_rarity();
    Ok(())
}

#[derive(Accounts)]
pub struct InitializeCreatorNFTCollection<'info> {
    #[account(init, payer = authority, space = 8 + 72)] // Adjust the space as needed
    pub nft_collection: Account<'info, CreatorNFTCollection>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct MintCreatorNFT<'info> {
    #[account(init, payer = owner, space = 8 + 96)] // Adjust the space as needed
    pub nft: Account<'info, CreatorNFT>,
    #[account(mut)]
    pub nft_collection: Account<'info, CreatorNFTCollection>,
    #[account(mut)]
    pub owner: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpgradeCreatorNFTRarity<'info> {
    #[account(mut)]
    pub nft_account: Account<'info, CreatorNFT>,
}
