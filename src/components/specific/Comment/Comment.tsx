import React, { useState } from "react";
import * as S from "./style";
import { Avatar } from "../../common/User/Avatar";
import dayjs from "dayjs";
import ReplyCommentInput from "./ReplyCommentInput";
import { useAxiosWithAuth } from "../../../hooks/useAxiosWithAuth";
import { ChildComment, ParentComment } from "../../../types/comment";
import { Reply } from "./Reply";
import { Modal } from "../../common/Modal/Modal";
import { GButton, WButton } from "../../../assets/styles/style";

interface CommentProps {
  comment: ParentComment;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replys, setReplys] = useState<ChildComment[]>(comment.childComments);
  const [showModal, setShowModal] = useState(false);

  const axiosInstance = useAxiosWithAuth();

  const onDeleteComment = () => {
    axiosInstance.delete(`/comment/${comment.id}`).then((res) => {
      if (res.status === 204) {
        window.alert("댓글이 삭제되었습니다.");
        closeModalHandler();
      }
    });
  };

  const onSubmitReply = (content: string) => {
    if (content === "") {
      window.alert("댓글을 작성해 주세요.");
      return;
    }

    const data = {
      content: content,
      reviewId: comment.reviewId,
      parentCommentId: comment.id,
    };

    axiosInstance.post("/comment/reply", data).then((res) => {
      if (res.status === 201) {
        setReplys([...replys, res.data]);
      }
    });
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const replyInputHandler = () => {
    setShowReplyInput(!showReplyInput);
  };

  return (
    <S.CommentContainer>
      {showModal && (
        <Modal
          active={showModal}
          onClose={closeModalHandler}
          title={"댓글 삭제"}
          content={"댓글을 삭제하시겠습니까?"}
        >
          <WButton onClick={closeModalHandler}>취소</WButton>
          <GButton onClick={onDeleteComment}>확인</GButton>
        </Modal>
      )}
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
          <button
            onClick={() => {
              showModalHandler();
            }}
          >
            삭제
          </button>
        </S.CommentAction>
      </S.CommentHeader>
      <S.CommentBody>
        <p>{comment.content}</p>
      </S.CommentBody>
      <S.CommentOption>
        <button className="write-reply" onClick={replyInputHandler}>
          답글({replys.length})
        </button>
      </S.CommentOption>

      {showReplyInput && (
        <div>
          {replys.map((reply) => (
            <Reply comment={reply} />
          ))}
          <ReplyCommentInput onSubmitReply={onSubmitReply}></ReplyCommentInput>
        </div>
      )}
    </S.CommentContainer>
  );
};
