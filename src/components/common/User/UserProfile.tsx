import React from "react";
import * as Styled from "./style";
import { Avatar } from "./Avatar";

export const UserProfile = (props: {
  url: string | undefined;
  nickname: string;
}) => {
  return (
    <Styled.UserInfoContainer>
      <Avatar url={props.url} size={32} />
      <Styled.UserNickName>{props.nickname}</Styled.UserNickName>
    </Styled.UserInfoContainer>
  );
};
