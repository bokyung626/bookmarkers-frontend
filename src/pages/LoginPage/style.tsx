import styled from "styled-components";

export const LoginPageContainer = styled.div`
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

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 10px;
  gap: 10px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LoginButton = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
`;

export const ErrorMsg = styled.p`
  color: red;
`;
