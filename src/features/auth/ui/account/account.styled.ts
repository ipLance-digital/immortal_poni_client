import styled from 'styled-components';

export const AccountTrigger = styled.div`
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  transition-duration: 200ms;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
