import styled, { css, RuleSet } from 'styled-components';
import { ITextProps, TextVariant } from './text.types';

const VariantTypes: Record<TextVariant, RuleSet<object>> = {
  'heading-1': css`
    font-size: 32px;
    line-height: 40px;
  `,
  'heading-2': css`
    font-size: 24px;
    line-height: 32px;
  `,
  'heading-3': css`
    font-size: 16px;
    line-height: 20px;
  `,
  'heading-4': css`
    font-size: 14px;
    line-height: 20px;
  `,
  'heading-5': css`
    font-size: 13px;
    line-height: 18px;
  `,
  'body-16': css`
    font-size: 16px;
    line-height: 22px;
  `,
  'body-14': css`
    font-size: 14px;
    line-height: 20px;
  `,
  'body-13': css`
    font-size: 13px;
    line-height: 18px;
  `,
  numbers: css`
    font-family: monospace;
    font-size: 13px;
    line-height: 18px;
  `,
  'button-16': css`
    font-size: 16px;
    line-height: 16px;
  `,
  'button-14': css`
    font-size: 14px;
    line-height: 14px;
  `,
  'button-12': css`
    font-size: 12px;
    line-height: 12px;
  `,
};

export const StyledText = styled.p<ITextProps>`
  display: inline-flex;
  align-items: center;
  column-gap: 8px;
  font-family: Inter, Arial, Helvetica, sans-serif;
  color: ${({ color }) => color ?? 'inherit'};
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ variant = 'body-14' }) => VariantTypes[variant]};
`;
