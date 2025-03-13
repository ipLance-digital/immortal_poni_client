'use client';

import { useUser } from '@/features/auth/actions/use-user';
import { redirect } from 'next/navigation';

export const AuthProtect = ({ children }: { children: React.ReactNode }) => {
  const user = useUser();

  if (user.isPending) {
    return <div>Loading...</div>;
  }

  if (!user.data) {
    return redirect('/sign-in');
  }

  return <>{children}</>;
};
