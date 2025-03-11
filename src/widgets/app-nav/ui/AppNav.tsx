import { FC } from 'react';
import Link from 'next/link';

export const AppNav: FC = () => {
  return (
    <nav className='flex items-center gap-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg shadow-sm'>
      <Link
        href='/home'
        className='text-foreground/80 hover:text-foreground transition-colors'
      >
        Главная
      </Link>
      <Link
        href='/profile'
        className='text-foreground/80 hover:text-foreground transition-colors'
      >
        Профиль
      </Link>
    </nav>
  );
};
