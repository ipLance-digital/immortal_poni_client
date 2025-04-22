import { queryOptions } from '@tanstack/react-query';
import { LoginSchema, RegisterSchema, UserSchema } from '@/entities/user/model';
import { apiFetch } from '@/shared/api/api-fetch';
import { LoginDTO, SignupDTO } from './auth.types';

export const Auth = {
  baseKey: 'auth',
  // ===== QUERIES =====
  me: () =>
    queryOptions({
      queryKey: [Auth.baseKey],
      queryFn: () =>
        apiFetch('auth/me', {
          schema: UserSchema,
        }),
      retry: 0,
    }),

  // ===== MUTATIONS =====
  login: (credentials: LoginDTO) =>
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

  signup: (registerData: SignupDTO) =>
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
