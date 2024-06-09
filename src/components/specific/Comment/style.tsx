import styled from "styled-components";

export const WriteCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  align-items: flex-end;
  gap: 10px;
`;

export const WriteCommentEditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 40px;

  align-items: flex-end;
  gap: 10px;
`;

export const WriteReplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 40px;
  background-color: #e7efe7;

  align-items: flex-end;
  gap: 10px;
`;

export const CommentListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  gap: 10px;
`;

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  gap: 10px;
  border-bottom: 1px solid #c3c3c3;
  border-style: dotted;
`;

export const ReplyContainer = styled(CommentContainer)``;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentBody = styled.div`
  display: flex;
  padding: 10px 0;
  white-space: pre-wrap;
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;

  .date {
    font-size: 0.8rem;
    color: gray;
  }

  .nickname {
    font-weight: 600;
  }
`;

export const CommentAction = styled.div`
  display: flex;
  gap: 5px;

  button {
    color: gray;
    font-weight: 600;
    background-color: transparent;
  }
`;

export const CommentEditAction = styled.div`
  display: flex;
  gap: 5px;
`;

export const CommentProfile = styled.div`
  gap: 10px;
  display: flex;
`;

export const CommentOption = styled.div`
  .write-reply {
    color: green;

    font-weight: 600;
  }
`;
