'use client';

import { forwardRef } from 'react';
import { motion } from 'motion/react';
import { ButtonProps } from './button.types';
import { LoaderWrapper, StyledButton } from './button.styled';
import { Loader } from '../loader';

const ANIMATION_DURATION = 0.2;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, type = 'button', ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        {...props}
        type={type}
        disabled={loading || props.disabled}
      >
        <LoaderWrapper
          initial={{ y: -100 }}
          animate={{ y: loading ? 0 : -20, opacity: loading ? 1 : 0 }}
          transition={{ duration: ANIMATION_DURATION }}
        >
          <Loader />
        </LoaderWrapper>

        <motion.div
          animate={{ y: loading ? 20 : 0, opacity: loading ? 0 : 1 }}
          transition={{ duration: ANIMATION_DURATION }}
        >
          {children}
        </motion.div>
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
