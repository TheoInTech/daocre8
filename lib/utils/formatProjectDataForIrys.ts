import { IFormData } from "@/lib/schema/raise.schema";
import { IProject } from "@/lib/types/irys.types";

export const formatProjectDataForIrys = (
  data: IFormData,
  manifestId: string
): IProject => {
  const basicDetails = {
    name: data.basicDetails.name,
    location: data.basicDetails.location,
    imageUrl: `${manifestId}/${data.basicDetails.imageUrl.name}`,
    pdfUrl: `${manifestId}/${data.basicDetails.pdfUrl.name}`,
    videoUrl: `${manifestId}/${data.basicDetails.videoUrl.name}`,
    inspiration: data.basicDetails.inspiration,
    fundraiseEndDate: data.basicDetails.fundraiseEndDate,
    launchDate: data.basicDetails.launchDate,
    xUrl: data.basicDetails.xUrl,
    linkedinUrl: data.basicDetails.linkedinUrl,
    githubUrl: data.basicDetails.githubUrl,
  };

  const team = {
    undoxxed: data.team.undoxxed,
    name: data.team.name,
    about: data.team.about,
    linkedinUrl: data.team.linkedinUrl,
    githubUrl: data.team.githubUrl,
    xUrl: data.team.xUrl,
    pastProjectUrl: data.team.pastProjectUrl,
    teamProfileUrls: data.team.teamProfileUrls,
  };

  const fundingTiers = data.fundingTiers.map((tier) => ({
    ...tier,
    imageUrl: `${manifestId}/${tier.imageUrl.name}`,
  }));

  const fundingAndMilestones = {
    currency: data.fundingAndMilestones.currency,
  };

  return {
    category: data.category,
    basicDetails,
    team,
    fundingTiers,
    fundingAndMilestones,
  } as IProject;
};
