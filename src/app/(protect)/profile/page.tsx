'use client';

import { useUser } from '@/entities/auth/use-auth-query';
import { SignInForm } from '@/features/auth/sing-in-form';
import Link from 'next/link';

export default function ProfilePage() {
  const auth = useUser();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.data) {
    return (
      <div>
        <Link href={'/'}>Главная</Link>
        <p>Hello, {auth.data.username}</p>
        {/* <button onClick={() => auth.logout()}>Выйти</button> */}
      </div>
    );
  }

  return <SignInForm />;
}
