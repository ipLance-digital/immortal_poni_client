import styled from 'styled-components';

export const Wrapper = styled.div`
  //
`;

export const OrderWrapper = styled.div`
  padding: 16px;
  max-width: 750px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  /* box-shadow: ${({ theme }) => theme.shadows.sm}; */
`;

export const Tag = styled.div`
  padding: 4px 8px;
  display: flex;
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: 16px;
`;
