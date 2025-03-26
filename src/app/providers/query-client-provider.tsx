'use client';

import { QueryClientProvider as ReactQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@/shared/api/query-client';

export const QueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}

      <ReactQueryDevtools />
    </ReactQueryClientProvider>
  );
};
