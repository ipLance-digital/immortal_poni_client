export interface ButtonVariantProps {
  /** @default "md" */
  size?: '2xs' | 'xs' | 'md' | 'lg' | 'xl' | '2xl';
  /** @default "solid" */
  variant?: 'solid' | 'subtle' | 'surface' | 'outline' | 'ghost' | 'plain';
}

export type ButtonProps = ButtonVariantProps & {
  children: React.ReactNode;
};
