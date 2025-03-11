'use client';

import { PropsWithChildren, useEffect } from 'react';
import { useStore } from '@/shared/store/use-store';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/navigation';
import { FullPageSpinner } from '@/shared/ui/full-page-spinner';

export const AuthorizationGuard = observer(
  ({ children }: PropsWithChildren) => {
    const router = useRouter();
    const { user } = useStore();

    useEffect(() => {
      const checkAuth = async () => {
        if (!user.isAuth) {
          try {
            await user.getInfo();
          } catch (error) {
            console.error(error);
            router.replace('/auth/sign-in');
          }
        }
      };

      checkAuth();
    }, [router, user]);

    return (
      <>
        <FullPageSpinner isPending={user.status.pending || !user.isAuth} />
        {user.isAuth && children}
      </>
    );
  },
);
