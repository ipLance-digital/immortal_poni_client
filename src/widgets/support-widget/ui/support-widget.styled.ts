import { motion } from 'motion/react';
import styled from 'styled-components';

export const WidgetButton = styled(motion.button)`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 1100;

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 48px;
  width: 80px;
  height: 48px;
  border-radius: 16px;
  outline: none;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray[200]};
  outline: 1px solid transparent;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: border 200ms;
  cursor: pointer;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.gray[800]};

  &:hover {
    outline: 1px solid ${({ theme }) => theme.colors.gray[400]};
    border-color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:focus-visible {
    outline: 4px solid ${({ theme }) => theme.colors.primary[100]};
    outline-offset: 2px;
  }
`;

export const WidgetWrapper = styled(motion.div)`
  position: fixed;
  bottom: 72px;
  right: 16px;
  z-index: 1100;

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
  padding: 16px;
  background: ${({ theme }) => theme.colors.green[50]};
  overflow-y: auto;
  overscroll-behavior: none;
`;
