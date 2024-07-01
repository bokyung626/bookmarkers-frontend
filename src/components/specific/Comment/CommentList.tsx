import React from "react";
import * as S from "./style";
import { Comment } from "./Comment";
import { ParentComment } from "comment";
import { Cookies } from "react-cookie";

interface CommentListProps {
  comments: ParentComment[];
  onDeleteComment: (commentId: string) => void;
  onUpdateComment: (commentId: string, newContent: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  comments,
  onDeleteComment,
  onUpdateComment,
}) => {
  return (
    <S.CommentListContainer>
      {comments.map((comment: ParentComment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onUpdateComment={onUpdateComment}
          onDeleteComment={onDeleteComment}
        ></Comment>
      ))}
    </S.CommentListContainer>
  );
};

export default CommentList;
