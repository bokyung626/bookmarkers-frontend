import React, { useState } from "react";
import * as S from "./style";
import { Avatar } from "../../common/User/Avatar";
import dayjs from "dayjs";
import { User } from "../../../types/user";
import ReplyCommentInput from "./ReplyCommentInput";

interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  reviewId: string;
  user: User;
}

interface CommentProps {
  comment: Comment;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);

  const onSubmitReply = (content: string) => {
    const data = {
      parentCommentId: comment.id,
    };
  };

  const replyInputHandler = () => {
    setShowReplyInput(!showReplyInput);
  };

  return (
    <S.CommentContainer>
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
          <p>수정</p>
          <p>삭제</p>
        </S.CommentAction>
      </S.CommentHeader>
      <S.CommentBody>
        <p>{comment.content}</p>
      </S.CommentBody>
      <S.CommentOption>
        <p className="write-reply" onClick={replyInputHandler}>
          답글
        </p>
      </S.CommentOption>
      {showReplyInput && (
        <ReplyCommentInput onSubmitReply={onSubmitReply}></ReplyCommentInput>
      )}
    </S.CommentContainer>
  );
};
