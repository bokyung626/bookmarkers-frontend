import React from "react";
import * as S from "./style";
import { Comment } from "./Comment";
import { ParentComment } from "../../../types/comment";

interface CommentListProps {
  comments: ParentComment[];
  onDeleteComment: (commentId: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  comments,
  onDeleteComment,
}) => {
  return (
    <S.CommentListContainer>
      {comments.map((comment: ParentComment) => (
        <Comment comment={comment} onDeleteComment={onDeleteComment}></Comment>
      ))}
    </S.CommentListContainer>
  );
};

export default CommentList;
