import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string().email(),
  phone: z.string(),
  created_at: z.coerce.date(),
});
