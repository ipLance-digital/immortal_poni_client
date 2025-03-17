'use client';

import { forwardRef } from 'react';
import { ButtonProps } from './button.types';
import { StyledButton } from './button.styled';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        {...props}
        type={'button'}
        disabled={loading || props.disabled}
      >
        {loading && <div>O</div>}
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
