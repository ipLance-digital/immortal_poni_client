'use client';

import { ChangeEvent } from 'react';
import {
  Check,
  ChevronDown,
  ChevronRight,
  LogOut,
  Plus,
  Sparkles,
} from 'lucide-react';
import {
  Avatar,
  Button,
  Divider,
  HStack,
  Icon,
  Popover,
  Text,
  VStack,
} from '@/shared/ui';
import { AccountItem, AccountTrigger } from './account.styled';
import { useToggle } from '@/shared/hooks';
import { useUser } from '../../model/useUser';
import { useLogin } from '../../model/useLogin';
import { useLogout } from '../../model/useLogout';
import { useTheme } from 'styled-components';
import { AccountTabs } from './ui/account-tabs';

export const AccountSwitcher = () => {
  const { user, isLoading } = useUser();
  const { login, loginPending } = useLogin();
  const { logout, logoutPending } = useLogout();

  const theme = useTheme();
  const [isOpen, toggleOpen] = useToggle();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = String(formData.get('username'));
    const password = String(formData.get('password'));

    login({
      username,
      password,
    });
  };

  if (isLoading || loginPending || logoutPending) {
    return (
      <HStack as={AccountTrigger} $align='center' $gap={8}>
        <Avatar username='' loading={isLoading} />
        <Icon icon={ChevronDown} />
      </HStack>
    );
  }

  if (!user) {
    return (
      <Popover
        trigger={
          <Button $variant='surface' $size='xl'>
            Войти
          </Button>
        }
      >
        <form onSubmit={handleSubmit}>
          <VStack $gap={16} $padding={16}>
            <VStack>
              <Text>Логин</Text>
              <input type='text' name='username' required />
            </VStack>
            <VStack>
              <Text>Пароль</Text>
              <input type='password' name='password' required />
            </VStack>

            <Button type='submit' $fullWidth $size='lg'>
              Войти
            </Button>
          </VStack>
        </form>
      </Popover>
    );
  }

  return (
    <HStack>
      <Popover
        isOpen={isOpen}
        onOpenChange={toggleOpen}
        trigger={
          <HStack as={AccountTrigger} $align='center' $gap={8}>
            <Avatar username={user.username} />
            <Icon
              icon={ChevronDown}
              style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
            />
          </HStack>
        }
      >
        <VStack $gap={16} $padding={16} style={{ width: 300 }}>
          <VStack $gap={8} $align='center'>
            <Avatar username={user.username} size={64} />
            <VStack $align='center'>
              <Text>{user.username}</Text>
              <Text $variant='body-13' $color={theme.colors.gray[400]}>
                {user.email}
              </Text>
            </VStack>
          </VStack>

          <AccountTabs />

          <Divider />

          <AccountItem>
            <Icon icon={Sparkles} />
            <HStack $flex={1}>
              <Text>Тема</Text>
            </HStack>

            <Icon icon={ChevronRight} />
          </AccountItem>

          <Divider />

          <VStack $gap={8}>
            <AccountItem>
              <Avatar username={user.username} size={32} />
              <VStack $flex={1}>
                <Text>{user.username}</Text>
                <Text
                  $variant='body-13'
                  $color={theme.colors.gray[400]}
                  style={{ maxWidth: '65%' }}
                >
                  {user.email}
                </Text>
              </VStack>

              <Icon icon={Check} />
            </AccountItem>

            <AccountItem>
              <Icon icon={Plus} />
              <Text>Добавить аккаунт</Text>
            </AccountItem>
          </VStack>

          <Divider />

          <AccountItem
            style={{ color: theme.colors.red[600] }}
            onClick={() => logout()}
          >
            <Icon icon={LogOut} />
            <Text>Выйти</Text>
          </AccountItem>
        </VStack>
      </Popover>
    </HStack>
  );
};
