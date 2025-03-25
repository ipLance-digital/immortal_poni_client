'use client';

import { AccountSwitcher } from '@/features/auth/ui';
import { HeaderWrapper } from './header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <h4>IPLanse</h4>
      <AccountSwitcher />
    </HeaderWrapper>
  );
};
