'use client';

import { useUser } from '@/entities/auth/use-user';
import { LogoutButton } from '@/features/auth/logout-button';
import Link from 'next/link';

export default function ProfilePage() {
  const auth = useUser();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (!auth.data) {
    return null;
  }

  return (
    <div>
      <Link href={'/'}>Главная</Link>
      <LogoutButton />
      <p>Hello, {auth.data.username}</p>
    </div>
  );
}
