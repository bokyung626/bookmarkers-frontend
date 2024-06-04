import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ErrorMsg,
  LoginButton,
  LoginForm,
  LoginFormWrapper,
  LoginPageContainer,
  StyledInput,
} from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // 폼 제출
  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMsg("비어있는 곳이 있습니다. 다시 확인해 주세요.");
      return;
    } else {
      setErrorMsg("");

      const data = {
        email,
        password,
      };

      await axios
        .post("/auth/login", data)
        .then((res) => {
          localStorage.setItem("accessToken", res.data.accessToken);
          navigate("/");
        })
        .catch((error: any) => {
          console.log(error);
          if (error.response.status === 404) {
            setErrorMsg("이메일과 비밀번호를 다시 확인해 주세요.");
          }
        });
    }
  };

  return (
    <div>
      <LoginPageContainer>
        <LoginFormWrapper>
          <h2>로그인</h2>
          <LoginForm onSubmit={loginHandler}>
            <StyledInput
              type="email"
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
            <LoginButton>로그인</LoginButton>
          </LoginForm>
          <ErrorMsg>{errorMsg}</ErrorMsg>
          <small>
            계정이 없으신가요?
            <Link to="/register">회원가입</Link>
          </small>
        </LoginFormWrapper>
      </LoginPageContainer>
    </div>
  );
};
