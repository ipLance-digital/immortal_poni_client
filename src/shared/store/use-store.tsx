import { RootStoreContext } from '@/app/_providers/store-provider';
import { useContext } from 'react';

export const useStore = () => {
  const store = useContext(RootStoreContext);

  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }

  return store;
};
