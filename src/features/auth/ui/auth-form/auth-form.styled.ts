import styled from 'styled-components';

export const LoginWrapper = styled.div`
  padding: 12px;
  width: 600px;
  max-width: 600px;
  margin: 0 auto;
`;

export const FormWrapper = styled.form`
  padding: 12px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows.xl};
`;

export const StyledInput = styled.input`
  padding: 8px 4px;
`;
