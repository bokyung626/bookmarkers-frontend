import React from "react";
import { StyledLink, RightMenuContainer } from "./style";

export const RightMenu = () => {
  return (
    <RightMenuContainer>
      <StyledLink to="/login">로그인</StyledLink>
      <StyledLink to="/register">회원가입</StyledLink>
    </RightMenuContainer>
  );
};
