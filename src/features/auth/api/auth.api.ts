import { ApiRequest } from '@/shared/api/api-request';
import { queryOptions } from '@tanstack/react-query';

export const AuthAPI = {
  baseKey: 'user',
  me: () =>
    queryOptions({
      queryKey: [AuthAPI.baseKey],
      queryFn: () => ApiRequest('auth/me'),
      retry: 0,
    }),
};
