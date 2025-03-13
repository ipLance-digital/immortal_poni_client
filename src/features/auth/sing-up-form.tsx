'use client';

import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';
import Link from 'next/link';
import { useSignUp } from './actions/use-sign-up';

export const SignUpForm = () => {
  const { signup, isPending, error } = useSignUp();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username')?.toString();
    const password = formData.get('password')?.toString();
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString();

    if (!username || !password || !email || !phone) {
      return alert('Введите поля');
    }

    signup({
      username,
      password,
      email,
      phone,
    });
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 items-center'>
      <Input type='text' name={'username'} autoComplete='off' />
      <Input type='password' name={'password'} autoComplete='off' />
      <Input type='email' name={'email'} autoComplete='off' />
      <Input type='tel' name={'phone'} autoComplete='off' />

      {!!error && <p>{error}</p>}
      <Button loading={isPending} className='w-full'>
        Зарегистрироваться
      </Button>
      <Link href={'sign-in'}>Есть аккаунт? Просто войдите</Link>
    </form>
  );
};
