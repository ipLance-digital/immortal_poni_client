'use client';

import StyledComponentsRegistry from '@/shared/lib/styled-components-registry';
import { ThemeProvider } from '@/shared/theme/provider';
import { QueryClientProvider } from './query-client-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider>
        <QueryClientProvider>{children}</QueryClientProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};
