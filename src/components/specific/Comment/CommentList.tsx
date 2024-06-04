import React from "react";
import * as S from "./style";
import { Comment } from "./Comment";
import { ParentComment } from "../../../types/comment";

interface CommentListProps {
  comments: ParentComment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <S.CommentListContainer>
      {comments.map((comment: ParentComment) => (
        <Comment comment={comment}></Comment>
      ))}
    </S.CommentListContainer>
  );
};

export default CommentList;
