'use client';

import { AuthAPI } from '@/shared/api/auth';
import { useMutation } from '@tanstack/react-query';

export const useSignIn = () => {
  const loginMutation = useMutation({
    mutationFn: (data: { username: string; password: string }) =>
      AuthAPI.login(data),
  });

  return {
    isPending: loginMutation.isPending,
    login: loginMutation.mutate,
  };
};
