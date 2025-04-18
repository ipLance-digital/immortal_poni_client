'use client';

import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { queryClient, API, LoginDTO } from '@/shared/api';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationKey: [API.auth.baseKey],
    mutationFn: (data: LoginDTO) => API.auth.login(data),
    onError: () => {
      toast.error('Неправильный логин или пароль');
    },
    onSuccess: () => {
      router.push('/');
      queryClient.resetQueries();
    },
  });

  return { login: mutate, loginPending: isPending };
};
