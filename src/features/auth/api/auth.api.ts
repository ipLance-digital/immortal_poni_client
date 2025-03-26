import { UserDTO } from '@/entities/user/types';
import { ApiRequest } from '@/shared/api/api-request';
import { queryOptions } from '@tanstack/react-query';

export interface Credentials {
  username: string;
  password: string;
}

export const AuthAPI = {
  baseKey: 'user',
  me: () =>
    queryOptions<UserDTO>({
      queryKey: [AuthAPI.baseKey],
      queryFn: () => ApiRequest('auth/me'),
      retry: 0,
    }),

  // ===== MUTATIONS =====
  login: (credentials: Credentials) =>
    ApiRequest<string>('auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }),
  logout: () =>
    ApiRequest<string>('auth/logout', {
      method: 'POST',
    }),
  refresh: () =>
    ApiRequest<string>('auth/refresh', {
      method: 'POST',
    }),
};
