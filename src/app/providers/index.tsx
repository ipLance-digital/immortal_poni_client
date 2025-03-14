'use client';

import StyledComponentsRegistry from '@/shared/lib/registry';
import { ThemeProvider } from '@/shared/theme/provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};
