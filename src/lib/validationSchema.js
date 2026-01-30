import { z } from "zod";

export const userRegistrationSchema = z.object({
  first_name: z.string().min(2, "Name is required").max(50),
  last_name: z.string().min(2, "Name is required").max(50),
  client_email: z.string().email("Invalid Email").max(50, "Email is too long"),
  client_phone: z
    .string()
    .regex(/^(?:\+?1\s?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/),
  client_message: z.string().max(2000, "Message is too long").optional(),
});
