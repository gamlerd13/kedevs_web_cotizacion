import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(4, {
    message: "Name must be at least 4 characters long",
  }),
  password: z.string().min(4, {
    message: "Name must be at least 4 characters long",
  }),
});
