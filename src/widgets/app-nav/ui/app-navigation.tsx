'use client';

import { FC } from 'react';
import { Nav, StyledLink } from './app-navigation.styled';
import { HStack } from '@/shared/ui/stack';

export const AppNavigation: FC = () => {
  return (
    <Nav>
      <HStack gap={15} wrap='wrap' className='container'>
        <StyledLink href='/'>Главная</StyledLink>
        <StyledLink href='/profile/123'>Профиль</StyledLink>
      </HStack>
    </Nav>
  );
};
