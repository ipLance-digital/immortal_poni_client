import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';
import { LoginSchema, RegisterSchema, UserSchema } from '@/entities/user/model';
import { apiFetch } from '@/shared/api/api-request';

export const AuthAPI = {
  baseKey: 'auth',
  // ===== QUERIES =====
  me: () =>
    queryOptions({
      queryKey: [AuthAPI.baseKey],
      queryFn: () =>
        apiFetch('auth/me', {
          schema: UserSchema,
        }),
      retry: 0,
    }),

  // ===== MUTATIONS =====
  login: (credentials: z.infer<typeof LoginSchema>) =>
    apiFetch('auth/login', {
      method: 'POST',
      body: credentials,
      bodySchema: LoginSchema,
      schema: UserSchema,
    }),

  logout: () =>
    apiFetch<string>('auth/logout', {
      method: 'POST',
    }),

  register: (registerData: z.infer<typeof RegisterSchema>) =>
    apiFetch('auth/register', {
      method: 'POST',
      body: registerData,
      bodySchema: RegisterSchema,
      schema: UserSchema,
    }),

  refresh: () =>
    apiFetch<string>('auth/refresh', {
      method: 'POST',
    }),
};
