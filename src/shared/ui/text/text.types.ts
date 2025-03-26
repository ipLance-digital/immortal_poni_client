type TextVariant =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'body-16'
  | 'body-14'
  | 'body-13'
  | 'numbers'
  | 'button-16'
  | 'button-14'
  | 'button-12';

export interface ITextProps {
  children: React.ReactNode;
  $variant?: TextVariant;
  $color?: string;
  style?: React.CSSProperties;
}
