'use client';

import styled, { css, CSSProperties } from 'styled-components';
import { IStackProps } from './stack.types';

export const getGapValue = (value?: CSSProperties['gap']) =>
  typeof value === 'number' ? `${value}px` : value || '0';

const Stack = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'height',
      'flex',
      'padding',
      'direction',
      'align',
      'justify',
      'wrap',
      'gap',
      'center',
    ].includes(prop),
})<IStackProps>`
  position: relative;
  display: flex;
  height: ${({ height }) =>
    typeof height === 'number' ? height + 'px' : height};
  flex: ${({ flex }) => flex};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-wrap: ${({ wrap }) => wrap};
  padding: ${({ padding }) =>
    typeof padding === 'number' ? padding + 'px' : padding};

  ${({ gap }) => {
    if (typeof gap === 'object') {
      const rowGap = getGapValue(gap.row);
      const columnGap = getGapValue(gap.column);

      return `
        row-gap: ${rowGap};
        column-gap: ${columnGap};
      `;
    }

    return `gap: ${getGapValue(gap)};`;
  }}

  ${({ center }) =>
    center &&
    css`
      height: 100%;
      align-items: center;
      justify-content: center;
    `};
`;

export const HStack = styled(Stack)`
  flex-direction: row;
`;

export const VStack = styled(Stack)`
  flex-direction: column;
`;
