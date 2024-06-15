import styled from "styled-components";

export const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const StyledInput = styled.input`
  padding: 10px 20px;
`;

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 10px;
  gap: 10px;
`;

export const AlertMsg = styled.small`
  color: green;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RegisterButton = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
`;
