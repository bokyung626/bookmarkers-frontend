import React from "react";
import { StyledLink, RightMenuContainer, StyledLogoutButton } from "./style";
import { useNavigate } from "react-router-dom";

export const RightMenu = () => {
  const navigation = useNavigate();

  const isLogin = !!localStorage.getItem("accessToken");
  console.log(isLogin);

  // 로그아웃 이벤트 핸들러
  const onLogoutHandler = () => {
    localStorage.removeItem("accessToken");
    navigation("/");
  };

  return isLogin ? (
    <RightMenuContainer>
      <StyledLogoutButton onClick={onLogoutHandler}>
        로그아웃
      </StyledLogoutButton>
    </RightMenuContainer>
  ) : (
    <RightMenuContainer>
      <StyledLink to="/login">로그인</StyledLink>
      <StyledLink to="/register">회원가입</StyledLink>
    </RightMenuContainer>
  );
};
