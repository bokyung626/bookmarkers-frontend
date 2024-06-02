import React, { useState } from "react";
import * as S from "./style";
import { User } from "../../../types/user";
import dayjs from "dayjs";
import { Avatar } from "../../common/User/Avatar";
import ReplyCommentInput from "./ReplyCommentInput";
import { Comment } from "./Comment";

interface Comment {
  id: string;
  content: string;
  createdAt: Date;
  reviewId: string;
  user: User;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <S.CommentListContainer>
      {comments.map((comment: Comment) => (
        <Comment comment={comment}></Comment>
      ))}
    </S.CommentListContainer>
  );
};

export default CommentList;
