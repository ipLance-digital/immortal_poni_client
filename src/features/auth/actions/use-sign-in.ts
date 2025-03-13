'use client';

import { ApiError } from '@/shared/api/api-request';
import { AuthAPI } from '@/shared/api/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useSignIn = () => {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: (data: { username: string; password: string }) =>
      AuthAPI.login(data),
    onSuccess: () => {
      router.push('/profile');
    },
  });

  return {
    isPending: loginMutation.isPending,
    error:
      loginMutation.error instanceof ApiError
        ? loginMutation.error.getErrorMessage()
        : null,
    login: loginMutation.mutate,
  };
};
