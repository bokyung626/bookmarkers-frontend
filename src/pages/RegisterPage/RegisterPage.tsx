import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./style";
import axios from "axios";
import { GButton } from "../../assets/styles/style";

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [alert, setAlert] = useState("");

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const nicknameRegEx = /^[가-힣a-zA-Z]+$/;
  // 폼 제출
  const onSubmitRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      email === "" ||
      password === "" ||
      nickname === "" ||
      checkPassword === ""
    ) {
      setAlert("비어있는 곳이 있습니다. 다시 확인해 주세요.");
      return;
    }

    if (!nicknameRegEx.test(nickname)) {
      setAlert("유효하지 않은 닉네임 형식입니다.");
      return;
    }

    if (!emailRegEx.test(email)) {
      setAlert("유효하지 않은 이메일 형식 입니다.");
      return;
    }

    if (password !== checkPassword) {
      setAlert("비밀번호가 일치하지 않습니다.");
      return;
    } else setAlert("");

    const data = {
      email,
      password,
      nickname,
    };

    axios
      .post("/auth/register", data)
      .then((res) => {
        if (res.status === 200) {
          window.alert("회원가입 되었습니다.");
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setAlert("이미 존재하는 이메일 입니다.");
        }
      });
  };

  return (
    <div>
      <S.RegisterPageContainer>
        <S.RegisterFormWrapper>
          <h2>회원가입</h2>
          <S.RegisterForm onSubmit={onSubmitRegister}>
            <S.StyledInput
              type="text"
              placeholder="닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />

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
            <S.StyledInput
              type="password"
              placeholder="비밀번호 확인"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
            <S.RegisterButton>회원가입</S.RegisterButton>
          </S.RegisterForm>
          {alert && <S.AlertMsg>{alert}</S.AlertMsg>}
          <small>
            이미 계정이 있으신가요?
            <Link to="/login">로그인</Link>
          </small>
        </S.RegisterFormWrapper>
      </S.RegisterPageContainer>
    </div>
  );
};
