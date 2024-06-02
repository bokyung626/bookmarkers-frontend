import React from "react";
import * as S from "./style";

interface AvatarProps {
  url: string | undefined;
  size: number;
}

export const Avatar: React.FC<AvatarProps> = ({ url, size }) => {
  return (
    <S.Avatar size={size}>
      <img src={url} alt="" />
    </S.Avatar>
  );
};
