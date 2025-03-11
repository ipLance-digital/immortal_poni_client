'use client';

import { createContext, ReactNode } from 'react';
import { Instance } from 'mobx-state-tree';
import { store, RootStore } from '@/shared/store';

export const RootStoreContext = createContext<Instance<
  typeof RootStore
> | null>(null);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};
