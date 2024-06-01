import React from "react";
import { LeftMenuContainer, LinkMenu, Logo } from "./style";
import { useLocation } from "react-router-dom";

export const LeftMenu = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <LeftMenuContainer>
      <Logo to="/">북마커스</Logo>
      <LinkMenu to="/review" active={isActive("/review")}>
        독서노트
      </LinkMenu>
      <LinkMenu to="/copynote" active={isActive("/copynote")}>
        필사노트
      </LinkMenu>
    </LeftMenuContainer>
  );
};
