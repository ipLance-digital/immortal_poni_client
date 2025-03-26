'use client';

import { useMutation } from '@tanstack/react-query';
import { AuthAPI, Credentials } from '../api/auth.api';
import { queryClient } from '@/shared/api/query-client';
import { toast } from 'sonner';

export const useLogin = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: [AuthAPI.baseKey],
    mutationFn: (data: Credentials) => AuthAPI.login(data),
    onError: () => {
      toast.error('Неправильный логин или пароль');
    },
    onSuccess: () => {
      queryClient.resetQueries();
    },
  });

  return { login: mutate, loginPending: isPending };
};
