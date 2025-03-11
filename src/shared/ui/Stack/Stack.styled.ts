import { styled, CSSProperties } from 'styled-components';

interface GapObject {
  row?: CSSProperties['gap'];
  column?: CSSProperties['gap'];
}

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column';
  gap?: CSSProperties['gap'] | GapObject;
  wrap?: CSSProperties['flexWrap'];
}

const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) => props.direction ?? 'row'};
  gap: ${(props) => {
    if (!props.gap) return '0';
    if (typeof props.gap === 'number') return `${props.gap}px`;
    if (typeof props.gap === 'string') return props.gap;
    return `
      row-gap: ${props.gap.row};
      column-gap: ${props.gap.column};
    `;
  }};
  flex-wrap: ${(props) => props.wrap ?? 'nowrap'};
`;

export const VStack = styled(Stack)`
  flex-direction: column;
`;

export const HStack = styled(Stack)`
  flex-direction: row;
`;
