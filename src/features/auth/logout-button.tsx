'use client';

import { useLogout } from './actions/use-logout';

export const LogoutButton = () => {
  const { isPending, logout } = useLogout();

  return (
    <button onClick={() => logout()} disabled={isPending}>
      Выйти
    </button>
  );
};
