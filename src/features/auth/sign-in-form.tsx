'use client';

import { useStore } from '@/shared/store/use-store';
import { VStack } from '@/shared/ui/stack';

export const SignInForm = () => {
  const { user } = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const username = formData.get('username');
    const password = formData.get('password');

    if (!username || !password) {
      return;
    }

    user.login({
      username: username as string,
      password: password as string,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack gap={16} style={{ marginTop: '20px' }}>
        <h2>Вход</h2>
        <input
          type='text'
          placeholder='Username'
          name='username'
          defaultValue={'superuser'}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          defaultValue={'050592Ser'}
        />
        <button type='submit'>Войти</button>
      </VStack>
    </form>
  );
};
