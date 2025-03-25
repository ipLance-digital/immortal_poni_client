'use client';

import { Wrapper } from './avatar.styled';
import Image from 'next/image';
import { getInitials } from '@/shared/lib/utils';
import { Text } from '@/shared/ui';

interface IAvatarProps {
  username: string;
  avatarURL?: string;
  size?: number;
}

export const Avatar: React.FC<IAvatarProps> = ({
  username,
  avatarURL,
  size,
}) => {
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
        <Text>{getInitials(username)}</Text>
      )}
    </Wrapper>
  );
};
