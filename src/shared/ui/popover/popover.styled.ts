import { motion } from 'motion/react';
import styled from 'styled-components';

export const ContentWrapper = styled(motion.div)`
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;
