'use client';

import { LogoutButton } from '@/features/auth/logout-button';
import { Avatar, AvatarFallback } from '@/shared/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/shared/ui/dropdown-menu';
import Link from 'next/link';

export const Profile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarFallback>SU</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent sticky='partial'>
        <DropdownMenuItem>
          <Link href={'/profile'}>Профиль</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
