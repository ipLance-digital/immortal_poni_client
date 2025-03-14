'use client';

import Link from 'next/link';
import { LogoutButton } from '@/features/auth/logout-button';
import { Avatar, AvatarFallback } from '@/shared/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/shared/ui/dropdown-menu';
import { useUser } from '@/features/auth/actions/use-user';
import { Skeleton } from '@/shared/ui/skeleton';
import { Button } from '@/shared/ui/button';
import { useRouter } from 'next/navigation';

export const Profile = () => {
  const router = useRouter();
  const user = useUser();

  const handleToLoginPage = () => {
    router.push('/sign-in');
  };

  if (user.isPending) {
    return <Skeleton className={'h-10 w-10 rounded-full'} />;
  }

  if (user.isError) {
    return (
      <Button className='h-10' onClick={handleToLoginPage}>
        Войти
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar style={{ cursor: 'pointer' }}>
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
