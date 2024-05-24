import React from "react";
import { LeftMenuContainer, LinkMenu, Logo } from "./style";

export const LeftMenu = () => {
  return (
    <LeftMenuContainer>
      <Logo>북마커스</Logo>
      <LinkMenu to="/">메인</LinkMenu>
      <LinkMenu to="/copynote">필사노트</LinkMenu>
    </LeftMenuContainer>
  );
};
