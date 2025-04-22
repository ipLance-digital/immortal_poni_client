'use client';

import { Button, Text, VStack } from '@/shared/ui';
import { FormWrapper, SignupWrapper, StyledInput } from './signup-form.styled';
import { useSignup } from '../../model/useSignup';

export const SignupForm = () => {
  const { signup, isPending } = useSignup();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get('email'));
    const phone = String(formData.get('phone'));
    const username = String(formData.get('username'));
    const password = String(formData.get('password'));

    signup({
      username,
      password,
      email,
      phone,
    });
  };

  return (
    <VStack as={SignupWrapper} gap={16}>
      <Text variant={'heading-2'}>Регистрация</Text>

      <VStack as={FormWrapper} onSubmit={handleSubmit} gap={16}>
        <VStack gap={4}>
          <label htmlFor='email'>Email</label>
          <StyledInput
            type='email'
            name='email'
            id='email'
            required
            autoComplete='off'
          />
        </VStack>
        <VStack gap={4}>
          <label htmlFor='phone'>Телефон</label>
          <StyledInput
            type='tel'
            name='phone'
            id='phone'
            required
            autoComplete='off'
          />
        </VStack>
        <VStack gap={4}>
          <label htmlFor='username'>Юзернейм</label>
          <StyledInput
            type='text'
            name='username'
            id='username'
            required
            autoComplete='off'
          />
        </VStack>
        <VStack gap={4}>
          <label htmlFor='password'>Пароль</label>
          <StyledInput
            type='password'
            name='password'
            id='password'
            required
            autoComplete='new-password'
          />
        </VStack>
        <VStack gap={4}>
          <label htmlFor='password-confirm'>Подтвердите пароль</label>
          <StyledInput
            type='password'
            name='password-confirm'
            id='password-confirm'
            required
            autoComplete='off'
          />
        </VStack>

        <Button type='submit' size='xl' fullWidth pending={isPending}>
          Зарегаться
        </Button>
      </VStack>
    </VStack>
  );
};
