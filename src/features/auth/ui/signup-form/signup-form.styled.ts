import styled from 'styled-components';

export const SignupWrapper = styled.div`
  margin: 0 auto;
  padding: 12px;
  width: 100%;
  max-width: 600px;
`;

export const FormWrapper = styled.form`
  padding: 12px;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadows.md};

  label {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const StyledInput = styled.input`
  padding: 8px 4px;
`;
