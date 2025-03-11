'use client';

import { FC } from 'react';
import { StyledLink } from './AppNav.styled';
import { HStack } from '@/shared/ui';

export const AppNav: FC = () => {
  return (
    <HStack as='nav' gap={15} wrap='wrap'>
      <StyledLink href='/home'>Главная</StyledLink>
      <StyledLink href='/profile'>Профиль</StyledLink>
    </HStack>
  );
};
