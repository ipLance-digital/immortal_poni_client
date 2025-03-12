import { queryOptions } from '@tanstack/react-query';
import { ApiRequest } from './axios';

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
  login: async (body: { username: string; password: string }) => {
    return ApiRequest('auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body,
    });
  },
  // logout: async () => {
  //   return queryOptions({
  //     queryKey: [AuthAPI.baseKey],
  //     queryFn: (meta) =>
  //       ApiRequest({
  //         url: 'auth/logout',
  //         method: 'POST',
  //         signal: meta.signal,
  //       }),
  //   });
  // },
};
