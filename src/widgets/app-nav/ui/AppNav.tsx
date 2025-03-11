'use client';

import { FC } from 'react';
import { Nav, StyledLink } from './AppNav.styled';

export const AppNav: FC = () => {
  return (
    <Nav>
      <StyledLink href='/home'>Главная</StyledLink>
      <StyledLink href='/profile'>Профиль</StyledLink>
    </Nav>
  );
};
