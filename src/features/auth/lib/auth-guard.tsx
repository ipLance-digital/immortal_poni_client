'use client';

import { useUser } from '../model/useUser';

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, isError } = useUser();

  if (isError) {
    // router.push('/login');
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};
