'use client';

import { ComposeChildren } from '@/shared/lib/react';
import { StoreProvider } from './store-provider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ComposeChildren>
      <StoreProvider>{children}</StoreProvider>
    </ComposeChildren>
  );
};
