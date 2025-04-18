import { queryOptions } from '@tanstack/react-query';
import { UserSchema } from '@/entities/user/model';
import { apiFetch } from '@/shared/api/api-request';

export interface Credentials {
  username: string;
  password: string;
}

export const AuthAPI = {
  baseKey: 'user',
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
  login: (credentials: Credentials) =>
    apiFetch<string>('auth/login', {
      method: 'POST',
      body: credentials,
    }),
  logout: () =>
    apiFetch<string>('auth/logout', {
      method: 'POST',
    }),
  refresh: () =>
    apiFetch<string>('auth/refresh', {
      method: 'POST',
    }),
};
