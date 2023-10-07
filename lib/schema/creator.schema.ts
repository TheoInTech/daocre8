import { z } from "zod";

export const UpdateSchema = z.object({
  update: z.string().nonempty("Your update cannot be empty"),
});

// Infer the types from Zod schemas
export type IUpdate = z.infer<typeof UpdateSchema>;
