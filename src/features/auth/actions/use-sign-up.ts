import { AuthAPI } from '@/shared/api/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useSignUp = () => {
  const router = useRouter();

  const signUpMutation = useMutation({
    mutationFn: (data: {
      username: string;
      password: string;
      email: string;
      phone: string;
    }) => AuthAPI.signUp(data),
    onSuccess: () => {
      router.push('/');
    },
  });

  return {
    error: signUpMutation.error?.message ?? '',
    isPending: signUpMutation.isPending,
    signup: signUpMutation.mutate,
  };
};
