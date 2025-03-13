'use client';

import { useQuery } from '@tanstack/react-query';
import { AuthAPI } from '@/shared/api/auth';

export function useUser() {
  return useQuery({
    ...AuthAPI.checkAuth(),
    retry: 0,
  });
}
