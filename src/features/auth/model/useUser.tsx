import { useQuery } from '@tanstack/react-query';
import { API } from '@/shared/api';

export const useUser = () => {
  const { data, isLoading, isError, error } = useQuery({
    ...API.auth.me(),
  });

  return { user: data, isLoading, isError, error };
};
