import React from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";

export const LeftMenu: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <S.LeftMenuContainer>
      <S.Logo to="/">북마커스</S.Logo>
      <S.LinkMenu to="/review" active={isActive("/review") ? true : undefined}>
        독서노트
      </S.LinkMenu>
      <S.LinkMenu
        to="/copynote"
        active={isActive("/copynote") ? true : undefined}
      >
        필사노트
      </S.LinkMenu>
    </S.LeftMenuContainer>
  );
};
