'use client';

import StyledComponentsRegistry from '@/shared/lib/registry';
import { ThemeProvider } from '@/shared/theme/provider';
import { QueryClientProvider } from './query-client-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider>
      <StyledComponentsRegistry>
        <ThemeProvider>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
};
