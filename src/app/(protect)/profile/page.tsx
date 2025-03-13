'use client';

import { useUser } from '@/features/auth/actions/use-user';
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
      <p>Hello, {auth.data.username}</p>
    </div>
  );
}
