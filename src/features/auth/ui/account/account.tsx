'use client';

import { useRouter } from 'next/navigation';
import { ChevronDown, Plus, Users } from 'lucide-react';
import { Avatar, Dropdown, HStack, Text } from '@/shared/ui';
import { AccountTrigger } from './account.styled';
import { useToggle } from '@/shared/hooks';

export function AccountSwitcher() {
  const router = useRouter();
  const [isOpen, toggleOpen] = useToggle();

  return (
    <Dropdown
      isOpen={isOpen}
      onOpenChange={toggleOpen}
      trigger={
        <HStack as={AccountTrigger} align='center' gap={8}>
          <Avatar
            username='silchenkoofficial'
            avatarURL='https://plus.unsplash.com/premium_photo-1741723515540-16a4e71b7d49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
          <ChevronDown
            style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
          />
        </HStack>
      }
      items={[
        {
          label: (
            <HStack align='center' gap={8}>
              <Avatar
                username='silchenkoofficial'
                avatarURL='https://plus.unsplash.com/premium_photo-1741723515540-16a4e71b7d49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              />
              <Text variant='body-14'> silchenkoofficial</Text>
            </HStack>
          ),
        },
        { divider: true },
        {
          label: (
            <HStack align='center' gap={8}>
              <Plus /> <Text variant='body-14'>Добавить аккаунт</Text>
            </HStack>
          ),
        },
        {
          label: (
            <HStack align='center' gap={8}>
              <Users /> <Text variant='body-14'>Создать команду</Text>
            </HStack>
          ),
        },
      ]}
    />
  );
}
