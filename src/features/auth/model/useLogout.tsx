'use client';

import { useMutation } from '@tanstack/react-query';
import { AuthAPI } from '../api/auth.api';
import { queryClient } from '@/shared/api/query-client';

export const useLogout = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [AuthAPI.baseKey],
    mutationFn: () => AuthAPI.logout(),
    onSuccess: () => {
      queryClient.resetQueries();
      queryClient.invalidateQueries();
    },
  });

  return { logout: mutate, logoutPending: isPending };
};
