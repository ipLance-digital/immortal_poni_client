'use client';

import { Button } from '@/shared/ui/button';
import { useSignIn } from './actions/use-sign-in';
import { Input } from '@/shared/ui/input';
import Link from 'next/link';

export const SignInForm = () => {
  const signInQuery = useSignIn();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username')!.toString();
    const password = formData.get('password')!.toString();

    signInQuery.login({
      username,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 items-center'>
      <Input type='text' name={'username'} autoComplete='off' required />
      <Input type='password' name={'password'} autoComplete='off' required />

      {!!signInQuery.error && <p>{signInQuery.error}</p>}
      <Button loading={signInQuery.isPending} className='w-full'>
        Войти
      </Button>
      <Link href={'sign-up'}>Зарегистрироваться</Link>
    </form>
  );
};
