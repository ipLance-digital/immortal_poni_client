import styled from 'styled-components';

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const TriggerWrapper = styled.div`
  &,
  & * {
    transition-duration: 200ms;
  }
`;

export const ContentWrapper = styled.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border-radius: 8px;
`;

export const ItemWrapper = styled.li`
  padding: 4px 8px;
  min-height: 32px;
  align-content: center;
  border-radius: 8px;
  cursor: pointer;
  transition-duration: 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
