import React from "react";
import * as Styled from "./style";

export const UserProfile = (props: {
  url: string | undefined;
  nickname: string;
}) => {
  return (
    <Styled.UserInfoContainer>
      <Styled.Avatar>
        <img src={props.url} alt=""></img>
      </Styled.Avatar>
      <Styled.UserNickName>{props.nickname}</Styled.UserNickName>
    </Styled.UserInfoContainer>
  );
};
