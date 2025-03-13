'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@/features/auth/actions/use-user';
import { Profile } from './profile';
import { Button } from '@/shared/ui/button';
import { Skeleton } from '@/shared/ui/skeleton';

export const Header = () => {
  const user = useUser();
  const router = useRouter();

  if (user.isPending) {
    return <Skeleton className='h-12 w-12 rounded-full' />;
  }

  return (
    <header className='py-2 px-10 flex items-center justify-between shadow-sm'>
      <p>IPLanse</p>
      {user.data?.id ? (
        <Profile />
      ) : (
        <Button
          onClick={() => {
            router.push('sign-in');
          }}
        >
          Войти
        </Button>
      )}
    </header>
  );
};
