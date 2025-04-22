import { API, queryClient, RegisterDTO } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useSignup = () => {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationKey: [API.auth.baseKey, 'signup'],
    mutationFn: (data: RegisterDTO) => API.auth.signup(data),
    onError: () => {
      toast.error('Произошла ошибка вовремя регистрации');
    },
    onSuccess: () => {
      router.push('/');
      queryClient.resetQueries();
    },
  });

  return { signup: mutate, isPending };
};
