'use client';

import { Button, VStack } from '@/shared/ui';
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
    <VStack as={LoginWrapper}>
      <VStack as={FormWrapper} onSubmit={handleSubmit} gap={8}>
        <StyledInput type='text' name='username' id='' />
        <StyledInput type='password' name='password' id='' />

        <Button type={'submit'} size='lg' loading={loginPending} $fullWidth>
          Войти
        </Button>
      </VStack>
    </VStack>
  );
};
