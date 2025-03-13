'use client';

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
    login: loginMutation.mutate,
  };
};
