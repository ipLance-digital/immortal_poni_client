'use client';

import { useMutation } from '@tanstack/react-query';
import { API } from '@/shared/api';
import { queryClient } from '@/shared/api/query-client';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationKey: [API.auth.baseKey],
    mutationFn: () => API.auth.logout(),
    onSuccess: () => {
      queryClient.resetQueries();
      queryClient.invalidateQueries();
      router.push('/');
    },
  });

  return { logout: mutate, logoutPending: isPending };
};
