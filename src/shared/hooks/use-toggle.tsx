'use client';

import { useCallback, useState } from 'react';

export const useToggle = (initialState?: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState ?? false);

  const toggle = useCallback((value?: unknown) => {
    if (typeof value === 'boolean') {
      setIsOpen(value);
    } else {
      setIsOpen((prev) => !prev);
    }
  }, []);

  return [isOpen, toggle] as const;
};
