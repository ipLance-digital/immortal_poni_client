import { ThemeColors } from '@/shared/theme';
import { MotionProps } from 'motion/react';
import { HTMLAttributes } from 'react';

export interface ButtonVariantProps {
  /** @default "md" */
  size?: '2xs' | 'xs' | 'md' | 'lg' | 'xl' | '2xl';
  /** @default "solid" */
  variant?: 'solid' | 'subtle' | 'surface' | 'outline' | 'ghost' | 'plain';
  color?: keyof ThemeColors;
  fullWidth?: boolean;
}

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  pending?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
} & ButtonVariantProps &
  MotionProps;
