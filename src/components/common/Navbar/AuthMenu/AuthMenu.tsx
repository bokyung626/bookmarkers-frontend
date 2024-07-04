import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../../redux/actions";

export const AuthMenu = () => {
  const isLogin = !!localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userReducer.userData);
  const navigation = useNavigate();

  const onLogoutHandler = () => {
    alert("로그아웃 되었습니다.");
    localStorage.removeItem("accessToken");
    dispatch(logout());
    console.log(userData);
    navigation("/");
  };

  return (
    <S.AuthMenuContainer>
      <S.MenuBox>
        {isLogin ? (
          <>
            <S.LogoutButton onClick={onLogoutHandler}>로그아웃</S.LogoutButton>
          </>
        ) : (
          <>
            <S.Menu to="/login">로그인</S.Menu>
            <S.Br></S.Br>
            <S.Menu to="/register">회원가입</S.Menu>
          </>
        )}
      </S.MenuBox>
    </S.AuthMenuContainer>
  );
};
