'use client';

import { useUser } from '@/features/auth/actions/use-user';

export default function ProfilePage() {
  const auth = useUser();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (!auth.data) {
    return null;
  }

  return (
    <div className='container mx-auto px-6'>
      <h2 className='font-bold text-4xl text-teal-500'>Профиль</h2>
      <p className='mt-5'>
        Hello, <span className='font-semibold'>{auth.data.username}</span>!
      </p>
    </div>
  );
}
