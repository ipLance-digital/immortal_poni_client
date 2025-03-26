import { useQuery } from '@tanstack/react-query';
import { AuthAPI } from '../api/auth.api';

export const useUser = () => {
  const { data, isLoading, isError, error } = useQuery({
    ...AuthAPI.me(),
  });

  return { user: data, isLoading, isError, error };
};
