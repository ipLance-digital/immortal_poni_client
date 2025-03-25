import styled from 'styled-components';

export const AccountTrigger = styled.div<{ disabled?: boolean }>`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  &,
  & * {
    transition-duration: 200ms;
  }
`;

export const AccountItem = styled.div`
  padding: 8px;
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  transition-duration: 200ms;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
