import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

export const StyledLink = styled(Link)`
  color: var(--foreground);
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;
