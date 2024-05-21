import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  RegisterPageContainer,
  RegisterFormWrapper,
  RegisterForm,
  StyledInput,
  RegisterButton,
} from "./style";

export const RegisterPage = () => {
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
      <RegisterPageContainer>
        <RegisterFormWrapper>
          <h2>회원가입</h2>
          <RegisterForm>
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
          </RegisterForm>
          <RegisterButton onClick={onClickLogin}>회원가입</RegisterButton>
          {alert && <small>비어있는 곳이 있습니다. 다시 확인해 주세요.</small>}
          <small>
            이미 계정이 있으신가요?
            <Link to="/login">로그인</Link>
          </small>
        </RegisterFormWrapper>
      </RegisterPageContainer>
    </div>
  );
};
