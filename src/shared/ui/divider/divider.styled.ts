import styled from 'styled-components';
import { IDividerProps } from './divider';

export const StyledDivider = styled.hr<IDividerProps>`
  flex: 1;
  width: 100%;
  margin-block: ${({ my = 0 }) => `${my}px`};
  min-height: 1px;
  background-color: ${({ fill, theme }) =>
    !!fill ? fill : theme.colors.gray[200]};
  box-shadow: none !important;
  border: none;
`;
