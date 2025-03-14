import styled, { css, RuleSet } from 'styled-components';
import { ButtonVariantProps } from './button.types';

const sizes: Record<
  NonNullable<ButtonVariantProps['size']>,
  RuleSet<object>
> = {
  '2xs': css`
    padding: 2px 8px;
    font-size: 12px;
  `,
  xs: css`
    padding: 4px 12px;
    font-size: 14px;
  `,
  md: css`
    padding: 10px 20px;
    font-size: 16px;
  `,
  lg: css`
    padding: 12px 24px;
    font-size: 18px;
  `,
  xl: css`
    padding: 16px 32px;
    font-size: 20px;
  `,
  '2xl': css`
    padding: 20px 40px;
    font-size: 24px;
  `,
};

const variants: Record<
  NonNullable<ButtonVariantProps['variant']>,
  RuleSet<object>
> = {
  solid: css`
    background-color: #007bff;
    color: white;
    &:hover:not(:disabled) {
      background-color: #0056b3;
    }
  `,
  subtle: css`
    background-color: rgba(0, 123, 255, 0.1);
    color: #007bff;
    &:hover:not(:disabled) {
      background-color: rgba(0, 123, 255, 0.2);
    }
  `,
  surface: css`
    background-color: #f0f0f0;
    color: #333;
    &:hover:not(:disabled) {
      background-color: #e0e0e0;
    }
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid #007bff;
    color: #007bff;
    &:hover:not(:disabled) {
      background-color: rgba(0, 123, 255, 0.1);
    }
  `,
  ghost: css`
    background-color: transparent;
    color: #007bff;
    &:hover:not(:disabled) {
      background-color: rgba(0, 123, 255, 0.1);
    }
  `,
  plain: css`
    background-color: transparent;
    color: #333;
    &:hover:not(:disabled) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
};

export const StyledButton = styled.button<ButtonVariantProps>`
  padding: 10px 20px;
  width: fit-content;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition-duration: 200ms;

  ${({ size = 'md' }) => sizes[size]};
  ${({ variant = 'solid' }) => variants[variant]};

  &:active {
    transform: translateY(2px) scale(0.98);
  }

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
