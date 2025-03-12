'use client';

import { FC } from 'react';
import { Nav, StyledLink } from './app-navigation.styled';
import { HStack } from '@/shared/ui/stack';
import { useStore } from '@/shared/store/use-store';

export const AppNavigation: FC = () => {
  const { user } = useStore();

  return (
    <Nav>
      <HStack gap={15} wrap='wrap' className='container'>
        <StyledLink href='/'>Главная</StyledLink>
        <StyledLink href={`/profile/${user.id}`}>Профиль</StyledLink>
      </HStack>
    </Nav>
  );
};
