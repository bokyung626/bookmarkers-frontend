import React, { useState } from "react";
import { AutoResizeTextarea } from "../../common/AutoResizeTextarea/AutoResizeTextarea";
import * as Styled from "./style";
import { GButton } from "../../../assets/styles/style";

interface CommentInputProps {
  onSubmitComment: (content: string) => void;
}

const CommentInput: React.FC<CommentInputProps> = ({ onSubmitComment }) => {
  const [content, setContent] = useState("");

  return (
    <Styled.WriteCommentContainer>
      <AutoResizeTextarea
        value={content}
        placeholder="댓글을 작성하세요."
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></AutoResizeTextarea>
      <GButton
        onClick={() => {
          onSubmitComment(content);
          setContent("");
        }}
      >
        댓글 작성
      </GButton>
    </Styled.WriteCommentContainer>
  );
};

export default CommentInput;
