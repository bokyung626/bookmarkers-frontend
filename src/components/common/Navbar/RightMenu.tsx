import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../User/UserProfile";
import { useUserData } from "../../../hooks/useUserData";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/actions";
import { RootState } from "../../../redux/reducers";

export const RightMenu: React.FC = () => {
  // const { userData, setUserData } = useUserData();
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userReducer.userData);
  const navigation = useNavigate();

  // const isLogin = !!localStorage.getItem("user");

  console.log(userData);
  // 로그아웃 이벤트 핸들러

  return (
    <S.RightMenuContainer>
      {userData ? (
        <>
          <UserProfile
            url={userData.profileImage}
            nickname={userData.nickname}
          />
        </>
      ) : (
        <></>
      )}
    </S.RightMenuContainer>
  );
};
