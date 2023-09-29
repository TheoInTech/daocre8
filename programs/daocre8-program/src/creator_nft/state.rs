use anchor_lang::prelude::*;

#[derive(Clone, Debug, PartialEq, AnchorSerialize, AnchorDeserialize)]
pub enum Rarity {
    Starter,
    Builder,
    Innovator,
    Visionary,
    Legend,
}

impl Rarity {
    pub fn upgrade_rarity(&mut self) {
        match &self.rarity {
            Rarity::Starter => {
                self.rarity = Rarity::Builder;
            }
            Rarity::Builder => {
                self.rarity = Rarity::Innovator;
            }
            Rarity::Innovator => {
                self.rarity = Rarity::Visionary;
            }
            Rarity::Visionary => {
                self.rarity = Rarity::Legend;
            }
            Rarity::Legend => (),
        }
    }
}

#[derive(Clone, AnchorSerialize, AnchorDeserialize)]
pub struct CreatorMetadata {
    pub title: String,
    pub description: String,
    pub image_uri: String,
}

#[account]
pub struct CreatorNFTCollection {
    pub authority: Pubkey,
    pub metadata: CreatorMetadata,
}

#[account]
pub struct NFT {
    pub collection: Pubkey,
    pub owner: Pubkey,
    pub project_dao_id: Pubkey,
    pub rarity: Rarity,
}
