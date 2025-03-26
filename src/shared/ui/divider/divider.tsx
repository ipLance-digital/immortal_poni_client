'use client';

import { FC } from 'react';
import { StyledDivider } from './divider.styled';

export interface IDividerProps {
  my?: number;
  fill?: string;
}

export const Divider: FC<IDividerProps> = (props) => {
  return <StyledDivider {...props} />;
};
