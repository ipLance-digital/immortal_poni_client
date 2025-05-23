import { z } from 'zod';
import { LoginSchema, RegisterSchema, UserSchema } from '@/entities/user/model';

export type UserDTO = z.infer<typeof UserSchema>;
export type LoginDTO = z.infer<typeof LoginSchema>;
export type SignupDTO = Omit<z.infer<typeof RegisterSchema>, 'passwordConfirm'>;
