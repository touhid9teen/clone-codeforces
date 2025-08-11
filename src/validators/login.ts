import z from "zod";

export const LoginSchema = z.object({
  handleOrEmail: z.string().min(2, "Handle Must be at least 2 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});
