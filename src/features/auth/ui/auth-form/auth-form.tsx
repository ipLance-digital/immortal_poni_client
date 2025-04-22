'use client';

import { Button, Text, VStack } from '@/shared/ui';
import { FormWrapper, LoginWrapper, StyledInput } from './auth-form.styled';
import { useLogin } from '../../model';

export const AuthForm = () => {
  const { login, loginPending } = useLogin();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = String(formData.get('username'));
    const password = String(formData.get('password'));

    login({
      username,
      password,
    });
  };

  return (
    <VStack as={LoginWrapper} gap={16}>
      <Text variant='heading-2'>Вход</Text>
      <VStack as={FormWrapper} onSubmit={handleSubmit} gap={8}>
        <VStack gap={4}>
          <label htmlFor='username'>Юзернейм</label>
          <StyledInput type='text' name='username' id='username' required />
        </VStack>
        <VStack gap={4}>
          <label htmlFor='password'>Пароль</label>
          <StyledInput type='password' name='password' id='password' required />
        </VStack>

        <Button type={'submit'} size='xl' pending={loginPending} fullWidth>
          Войти
        </Button>
      </VStack>
    </VStack>
  );
};
