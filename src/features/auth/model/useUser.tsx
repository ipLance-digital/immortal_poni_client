import { usePrefetchQuery, useQuery } from '@tanstack/react-query';
import { API } from '@/shared/api';

export const useUser = () => {
  usePrefetchQuery(API.auth.me());
  const { data, isLoading, isError, error } = useQuery(API.auth.me());

  return { user: data, isLoading, isError, error };
};
