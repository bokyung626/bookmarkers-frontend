import React, { useState } from "react";
import { AutoResizeTextarea } from "../../common/AutoResizeTextarea/AutoResizeTextarea";
import * as Styled from "./style";
import { GButton } from "../../../assets/styles/style";

interface ReplyCommentInputProps {
  onSubmitReply: (content: string) => void;
}

const ReplyCommentInput: React.FC<ReplyCommentInputProps> = ({
  onSubmitReply,
}) => {
  const [content, setContent] = useState("");

  return (
    <Styled.WriteReplyContainer>
      <AutoResizeTextarea
        value={content}
        placeholder="답글을 작성하세요."
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></AutoResizeTextarea>
      <GButton
        onClick={() => {
          onSubmitReply(content);
          setContent("");
        }}
      >
        답글 작성
      </GButton>
    </Styled.WriteReplyContainer>
  );
};

export default ReplyCommentInput;
