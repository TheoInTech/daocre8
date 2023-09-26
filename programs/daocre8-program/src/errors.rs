use anchor_lang::prelude::*;

#[error_code]
pub enum DAOCre8Error {
    #[msg("You are not authorized to perform this action.")]
    Unauthorized,
    #[msg("Not allowed.")]
    NotAllowed,
    #[msg("Field can not be empty.")]
    FieldNotEmpty,
    #[msg("Invalid poll input.")]
    InvalidPollInput,
    #[msg("Invalid option index.")]
    InvalidOptionIndex,
    #[msg("Backer has already voted.")]
    VoterAlreadyVoted,
}
