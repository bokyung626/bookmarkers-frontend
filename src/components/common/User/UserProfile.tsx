import React from "react";
import * as Styled from "./style";
import { Avatar } from "./Avatar";

interface UserProfileProps {
  url: string | undefined;
  nickname: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ url, nickname }) => {
  return (
    <Styled.UserInfoContainer>
      <Avatar url={url} size={32} />
      <Styled.UserNickName>{nickname}</Styled.UserNickName>
    </Styled.UserInfoContainer>
  );
};
