import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

export const RightMenu: React.FC = () => {
  const navigation = useNavigate();

  const isLogin = !!localStorage.getItem("user");

  // 로그아웃 이벤트 핸들러
  const onLogoutHandler = () => {
    localStorage.removeItem("user");
    alert("로그아웃 되었습니다.");
    navigation("/");
  };

  return (
    <S.RightMenuContainer>
      {isLogin ? (
        <>
          {/* <S.Menu to="/mypage">마이 페이지</S.Menu>
          <S.Br></S.Br> */}
          <S.LogoutButton onClick={onLogoutHandler}>로그아웃</S.LogoutButton>
        </>
      ) : (
        <>
          <S.Menu to="/login">로그인</S.Menu>
          <S.Br></S.Br>
          <S.Menu to="/register">회원가입</S.Menu>
        </>
      )}
    </S.RightMenuContainer>
  );
};
