'use client';

import { AvatarSkeleton, Wrapper } from './avatar.styled';
import Image from 'next/image';
import { getInitials } from '@/shared/lib/utils';
import { Text } from '@/shared/ui';

interface IAvatarProps {
  username: string;
  avatarURL?: string;
  size?: number;
  loading?: boolean;
}

export const Avatar: React.FC<IAvatarProps> = ({
  username,
  avatarURL,
  size,
  loading,
}) => {
  if (loading) {
    return <AvatarSkeleton size={24} />;
  }

  return (
    <Wrapper size={size ?? 24}>
      {avatarURL ? (
        <Image
          src={avatarURL}
          alt={`${username}'s avatar`}
          fill
          style={{ objectFit: 'cover' }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      ) : (
        <Text variant='body-16'>{getInitials(username)}</Text>
      )}
    </Wrapper>
  );
};
