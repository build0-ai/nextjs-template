import { z } from "zod";

export const GetWelcomeResponseSchema = z.object({
  message: z.string(),
  integrationsCheckPassed: z.boolean(),
  authCheckPassed: z.boolean(),
});

export type GetWelcomeResponse = z.infer<typeof GetWelcomeResponseSchema>;

export const UserSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  image: z.string().nullable(),
});

export type User = z.infer<typeof UserSchema>;

export const GetUserMeResponseSchema = z.object({
  user: UserSchema,
});
export type GetUserMeResponse = z.infer<typeof GetUserMeResponseSchema>;
