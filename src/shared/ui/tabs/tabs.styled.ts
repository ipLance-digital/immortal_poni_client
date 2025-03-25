import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const TabButton = styled.div<{ $isActive: boolean }>`
  padding: 8px 16px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.gray[200] : theme.colors.white};
  border-radius: 8px;
  cursor: pointer;
`;
