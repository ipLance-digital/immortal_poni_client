import { queryOptions } from '@tanstack/react-query';
import { ApiRequest } from './api-request';

type UserDTO = {
  id: string;
  username: string;
  email: string;
  created_at: string;
};

export const AuthAPI = {
  baseKey: 'user',
  checkAuth: () => {
    return queryOptions({
      queryKey: [AuthAPI.baseKey],
      queryFn: (meta) =>
        ApiRequest<UserDTO>('auth/me', {
          signal: meta.signal,
        }),
    });
  },

  // ===== MUTATIONS =====
  login: async (body: { username: string; password: string }) => {
    return ApiRequest('auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  },
  logout: async () => {
    return ApiRequest('auth/logout', {
      method: 'POST',
    });
  },
};
