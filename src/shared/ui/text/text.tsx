'use client';

import { forwardRef, useMemo } from 'react';
import { ITextProps } from './text.types';
import { StyledText } from './text.styled';

export const Text = forwardRef<HTMLParagraphElement, ITextProps>(
  ({ children, ...props }, ref) => {
    const getTag = useMemo(() => {
      if (props.variant?.includes('heading')) {
        return `h${props.variant.split('-')[1]}` as const;
      }

      return 'p' as const;
    }, [props.variant]);

    return (
      <StyledText ref={ref} as={getTag} {...props}>
        {children}
      </StyledText>
    );
  }
);

Text.displayName = 'Text Component';
