'use client';

import { forwardRef } from 'react';
import { ButtonProps } from './button.types';
import { StyledButton } from './button.styled';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton ref={ref} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
