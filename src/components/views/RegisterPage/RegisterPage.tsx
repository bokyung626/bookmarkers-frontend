import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  RegisterPageContainer,
  RegisterFormWrapper,
  RegisterForm,
  StyledInput,
  RegisterButton,
} from "./style";
import axios from "axios";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [alert, setAlert] = useState("");

  // 폼 제출
  const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || password === "" || nickname === "") {
      setAlert("비어있는 곳이 있습니다. 다시 확인해 주세요.");
      return;
    } else if (password !== checkPassword) {
      setAlert("비밀번호가 일치하지 않습니다.");
      return;
    } else setAlert("");
    const data = {
      email,
      password,
      nickname,
    };

    axios.post("/auth/register", data).then((res) => {
      navigate("/");
    });
  };

  return (
    <div>
      <RegisterPageContainer>
        <RegisterFormWrapper>
          <h2>회원가입</h2>
          <RegisterForm onSubmit={onSubmitRegister}>
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
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledInput
              type="password"
              placeholder="비밀번호 확인"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
            <RegisterButton>회원가입</RegisterButton>
          </RegisterForm>
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
