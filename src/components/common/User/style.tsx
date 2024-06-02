import styled from "styled-components";

interface AvatarProps {
  size: number;
}
export const UserInfoContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.div<AvatarProps>`
  width: ${(props) => props.size + "px"};
  height: ${(props) => props.size + "px"};
  border-radius: 50%;
  overflow: hidden;
  display: flex;

  .img {
    width: 100%;
  }
`;

export const UserNickName = styled.p``;
