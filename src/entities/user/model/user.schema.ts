import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  phone: z.string(),
  created_at: z.coerce.date(),
});

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string().min(8),
});

export const RegisterSchema = UserSchema.pick({
  username: true,
  email: true,
  phone: true,
}).extend({
  password: z.string().min(8),
});
