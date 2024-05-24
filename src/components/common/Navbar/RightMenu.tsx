import React from "react";
import {
  StyledLink,
  RightMenuContainer,
  AuthMenu,
  Br,
  LogoutButton,
} from "./style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RightMenu = () => {
  const navigation = useNavigate();

  const isLogin = !!localStorage.getItem("accessToken");

  // const onLogoutHandler = () => {
  //   axios("/book/search").then((res) => {
  //     console.log(res);
  //   });
  // };

  // 로그아웃 이벤트 핸들러
  const onLogoutHandler = () => {
    localStorage.removeItem("accessToken");
    navigation("/");
  };

  return (
    <RightMenuContainer>
      {isLogin ? (
        <LogoutButton onClick={onLogoutHandler}>로그아웃</LogoutButton>
      ) : (
        <>
          <AuthMenu to="/login">로그인</AuthMenu>
          <Br></Br>
          <AuthMenu to="/register">회원가입</AuthMenu>
        </>
      )}
    </RightMenuContainer>
  );
  //   <RightMenuContainer>
  //     <StyledLogoutButton onClick={onLogoutHandler}>
  //       로그아웃
  //     </StyledLogoutButton>
  //   </RightMenuContainer>
  // ) : (
  //   <RightMenuContainer>
  //     <StyledLink to="/login">로그인</StyledLink>
  //     <StyledLink to="/register">회원가입</StyledLink>
  //   </RightMenuContainer>
};
