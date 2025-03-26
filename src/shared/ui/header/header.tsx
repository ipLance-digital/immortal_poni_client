'use client';

import { AccountSwitcher } from '@/features/auth/ui';
import { HeaderWrapper } from './header.styled';
import { Cat } from 'lucide-react';
import { Text } from '../text';
import { Icon } from '../icon';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Text $variant='heading-2'>
        <Icon icon={Cat} size={32} /> ipLanse
      </Text>
      <AccountSwitcher />
    </HeaderWrapper>
  );
};
