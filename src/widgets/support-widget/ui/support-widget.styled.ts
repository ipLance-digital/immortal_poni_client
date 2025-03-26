import { motion } from 'motion/react';
import styled from 'styled-components';

export const WidgetContainer = styled.div`
  position: fixed;
  bottom: 16px;
  right: 116px;
`;

export const IconWrapper = styled.div`
  display: inline-flex;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[100]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border-radius: 16px;
  transition-duration: 200ms;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[50]};
  }
`;

export const WidgetWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 350px;
  max-height: 600px;
  height: 600px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;

  h3 {
    width: 100%;
    text-align: center;
  }
`;

export const WidgetContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: ${({ theme }) => theme.colors.green[50]};
  overflow-y: hidden;
  overscroll-behavior: none;
`;
