import styled, { css, RuleSet } from 'styled-components';
import { motion } from 'motion/react';
import { ButtonVariantProps } from './button.types';

const sizes: Record<
  NonNullable<ButtonVariantProps['size']>,
  RuleSet<object>
> = {
  '2xs': css`
    padding: 0 12px;
    height: 18px;
    font-size: 12px;
  `,
  xs: css`
    padding: 0 12px;
    height: 20px;
    font-size: 12px;
  `,
  md: css`
    padding: 0 12px;
    height: 24px;
    font-size: 16px;
  `,
  lg: css`
    padding: 0 16px;
    height: 32px;
    font-size: 16px;
  `,
  xl: css`
    padding: 16px;
    height: 40px;
    font-size: 14px;
    line-height: 20px;
  `,
  '2xl': css`
    padding: 0 16px;
    height: 48px;
    font-size: 16px;
  `,
};

const variants: Record<
  NonNullable<ButtonVariantProps['variant']>,
  RuleSet<ButtonVariantProps>
> = {
  solid: css<ButtonVariantProps>`
    background-color: ${({ theme }) => theme.colors.gray[600]};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.gray[700]};
    }
  `,
  subtle: css<ButtonVariantProps>`
    background-color: ${({ theme }) => theme.colors.primary[50]};
    color: ${({ theme }) => theme.colors.primary[600]};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primary[100]};
    }
  `,
  surface: css<ButtonVariantProps>`
    background-color: #f0f0f0;
    color: #333;

    &:hover:not(:disabled) {
      background-color: #e0e0e0;
    }
  `,
  outline: css<ButtonVariantProps>`
    background-color: transparent;
    border: 1px solid #007bff;
    color: #007bff;

    &:hover:not(:disabled) {
      background-color: rgba(0, 123, 255, 0.1);
    }
  `,
  ghost: css<ButtonVariantProps>`
    background-color: transparent;
    color: #007bff;

    &:hover:not(:disabled) {
      background-color: rgba(0, 123, 255, 0.1);
    }
  `,
  plain: css<ButtonVariantProps>`
    background-color: transparent;
    color: #333;

    &:hover:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
};

export const StyledButton = styled(motion.button).withConfig({
  shouldForwardProp: (prop) =>
    !['fullWidth', 'variant', 'color', 'size'].includes(prop),
})<ButtonVariantProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  border: none;
  border-radius: 8px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition-duration: 200ms;
  white-space: nowrap;
  overflow: hidden;

  ${({ size = 'md' }) => sizes[size]};
  ${({ variant = 'solid' }) => variants[variant]};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const LoaderWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
