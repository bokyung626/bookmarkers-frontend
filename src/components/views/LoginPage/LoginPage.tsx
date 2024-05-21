import React from "react";
import {
  LoginButton,
  LoginForm,
  LoginFormWrapper,
  LoginPageContainer,
  StyledInput,
} from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [alert, setAlert] = useState(false);

  // 폼 제출
  const onClickLogin = () => {
    if (email === "" || password === "" || nickname === "") {
      setAlert(true);
    } else {
      setAlert(false);
    }
  };

  return (
    <div>
      <LoginPageContainer>
        <LoginFormWrapper>
          <h2>로그인</h2>
          <LoginForm>
            <StyledInput
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <StyledInput
              type="text"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledInput
              type="text"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </LoginForm>
          <LoginButton onClick={onClickLogin}>로그인</LoginButton>
          {alert && <small>비어있는 곳이 있습니다. 다시 확인해 주세요.</small>}
          <small>
            계정이 없으신가요?
            <Link to="register">회원가입</Link>
          </small>
        </LoginFormWrapper>
      </LoginPageContainer>
    </div>
  );
};
