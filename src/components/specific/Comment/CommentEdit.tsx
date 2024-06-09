import React, { useState } from "react";
import { AutoResizeTextarea } from "../../common/AutoResizeTextarea/AutoResizeTextarea";
import * as Styled from "./style";
import { GButton, WButton } from "../../../assets/styles/style";

interface CommentEditProps {
  onSubmitComment: (content: string) => void;
  onClose: () => void;
  originContent: string;
}

const CommentEdit: React.FC<CommentEditProps> = ({
  onClose,
  onSubmitComment,
  originContent,
}) => {
  const [content, setContent] = useState(originContent);

  return (
    <Styled.WriteCommentEditContainer>
      <AutoResizeTextarea
        value={content}
        placeholder="댓글을 작성하세요."
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></AutoResizeTextarea>
      <Styled.CommentEditAction>
        <WButton onClick={onClose}>취소</WButton>
        <GButton
          onClick={() => {
            onSubmitComment(content);
            setContent("");
          }}
        >
          댓글 수정
        </GButton>
      </Styled.CommentEditAction>
    </Styled.WriteCommentEditContainer>
  );
};

export default CommentEdit;
