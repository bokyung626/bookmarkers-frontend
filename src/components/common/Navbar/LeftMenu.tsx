import React from "react";
import { LeftMenuContainer, LinkMenu, Logo } from "./style";

export const LeftMenu = () => {
  return (
    <LeftMenuContainer>
      <Logo to="/">북마커스</Logo>
      <LinkMenu to="/readnote">독서노트</LinkMenu>
      <LinkMenu to="/copynote">필사노트</LinkMenu>
    </LeftMenuContainer>
  );
};
