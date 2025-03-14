'use client';

import Link from 'next/link';
import { Profile } from './profile';

export const Header = () => {
  return (
    <header className='py-2 px-10 flex items-center justify-between shadow-sm'>
      <Link href={'/'}>IPLanse</Link>
      <Profile />
    </header>
  );
};
