import { HTMLAttributes } from 'react';

export interface ButtonVariantProps {
  /** @default "md" */
  size?: '2xs' | 'xs' | 'md' | 'lg' | 'xl' | '2xl';
  /** @default "solid" */
  variant?: 'solid' | 'subtle' | 'surface' | 'outline' | 'ghost' | 'plain';
}

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
} & ButtonVariantProps;
