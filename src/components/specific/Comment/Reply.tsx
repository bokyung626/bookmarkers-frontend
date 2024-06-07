import React, { useState } from "react";
import * as S from "./style";
import { Avatar } from "../../common/User/Avatar";
import dayjs from "dayjs";
import { ChildComment } from "../../../types/comment";
import { Modal } from "../../common/Modal/Modal";
import { GButton, WButton } from "../../../assets/styles/style";

interface ReplyProps {
  comment: ChildComment;
  onDeleteReply: (replyId: string) => void;
}

export const Reply: React.FC<ReplyProps> = ({ comment, onDeleteReply }) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <S.ReplyContainer>
      {showModal && (
        <Modal
          active={showModal}
          onClose={closeModalHandler}
          title={"답글 삭제"}
          content={"답글을 삭제하시겠습니까?"}
        >
          <WButton onClick={closeModalHandler}>취소</WButton>
          <GButton
            onClick={() => {
              onDeleteReply(comment.id);
              closeModalHandler();
            }}
          >
            확인
          </GButton>
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
    </S.ReplyContainer>
  );
};
