'use client';

import { FC, useMemo } from 'react';
import { ITextProps } from './text.types';
import { StyledText } from './text.styled';

export const Text: FC<ITextProps> = ({ children, ...props }) => {
  const getTag = useMemo(() => {
    if (props.variant?.includes('heading')) {
      return `h${props.variant.split('-')[1]}` as const;
    }

    return 'p' as const;
  }, [props.variant]);

  return (
    <StyledText as={getTag} {...props}>
      {children}
    </StyledText>
  );
};
