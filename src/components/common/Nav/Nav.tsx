import React from "react";
import { LinkItem, Links, Logo, NavbarContainer } from "./style";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <NavbarContainer>
      <Logo>북마커스</Logo>
      <Links>
        <LinkItem>
          <NavLink to="">로그인</NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to="">회원가입</NavLink>
        </LinkItem>
      </Links>
    </NavbarContainer>
  );
};
