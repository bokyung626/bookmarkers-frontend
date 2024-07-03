import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useUserData } from "../../hooks/useUserData";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          // const user = {
          //   accessToken: res.data.accessToken,
          //   userData: res.data.userData,
          // };

          // localStorage.setItem("user", JSON.stringify(user));

          localStorage.setItem("accessToken", res.data.accessToken);
          dispatch(login(res.data.userData));

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
      <S.LoginPageContainer>
        <S.LoginFormWrapper>
          <h2>로그인</h2>
          <S.LoginForm onSubmit={loginHandler}>
            <S.StyledInput
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.StyledInput
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.LoginButton>로그인</S.LoginButton>
          </S.LoginForm>
          <S.ErrorMsg>{errorMsg}</S.ErrorMsg>
          <div>
            <span>계정이 없으신가요? </span>
            <Link to="/register">
              <span style={{ color: "green" }}>회원가입</span>
            </Link>
          </div>
        </S.LoginFormWrapper>
      </S.LoginPageContainer>
    </div>
  );
};
