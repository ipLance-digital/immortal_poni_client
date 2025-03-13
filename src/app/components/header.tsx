'use client';

import { useRouter } from 'next/navigation';
import { useUser } from '@/features/auth/actions/use-user';
import { LogoutButton } from '@/features/auth/logout-button';

export const Header = () => {
  const user = useUser();
  const router = useRouter();

  return (
    <div>
      {user.data?.id ? (
        <LogoutButton />
      ) : (
        <button
          onClick={() => {
            router.push('sign-in');
          }}
        >
          Войти
        </button>
      )}
    </div>
  );
};
