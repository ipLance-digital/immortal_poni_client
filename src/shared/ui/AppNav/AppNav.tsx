import { FC } from 'react';
import Link from 'next/link';

export const AppNav: FC = () => {
  return (
    <nav>
      <Link href="/">Главная</Link>
      <Link href="/auth">Авторизация</Link>
    </nav>
  );
};
