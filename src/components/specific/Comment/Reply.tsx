import React from "react";
import * as S from "./style";
import { Avatar } from "../../common/User/Avatar";
import dayjs from "dayjs";
import { ChildComment } from "../../../types/comment";

interface ReplyProps {
  comment: ChildComment;
}

export const Reply: React.FC<ReplyProps> = ({ comment }) => {
  return (
    <S.ReplyContainer>
      <S.CommentHeader>
        <S.CommentProfile>
          <Avatar url={comment.user.profileImage} size={38} />
          <S.CommentInfo>
            <p className="nickname">{comment.user.nickname}</p>
            <p className="date">
              {dayjs(comment.createdAt).format("YYYY-MM-DD HH:MM")}
            </p>
          </S.CommentInfo>
        </S.CommentProfile>
        <S.CommentAction>
          <button>수정</button>
          <button>삭제</button>
        </S.CommentAction>
      </S.CommentHeader>
      <S.CommentBody>
        <p>{comment.content}</p>
      </S.CommentBody>
    </S.ReplyContainer>
  );
};
