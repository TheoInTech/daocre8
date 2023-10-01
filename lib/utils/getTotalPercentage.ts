import { IMilestone } from "../schema/raise.schema";

export const getTotalPercentage = (
  milestones: IMilestone[],
  capitalPercentage: string | number
) => {
  return milestones.reduce(
    (acc, milestone) => Number(acc) + Number(milestone.percentage),
    Number(capitalPercentage)
  );
};
