'use client';

import { useMutation } from '@tanstack/react-query';
import { AuthAPI } from '@/shared/api/auth';
import { queryClient } from '@/shared/api/query-client';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const router = useRouter();

  const logoutMutation = useMutation({
    mutationFn: AuthAPI.logout,
    onSuccess: () => {
      router.push('/');
      queryClient.resetQueries();
    },
  });

  return {
    isPending: logoutMutation.isPending,
    logout: logoutMutation.mutate,
  };
};
