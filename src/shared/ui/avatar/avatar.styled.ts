import styled from 'styled-components';

export const Wrapper = styled.div<{ size: number }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 50%;
  overflow: hidden;
`;
