import React, { useState } from "react";
import * as S from "./style";
import { Avatar } from "../../common/User/Avatar";
import dayjs from "dayjs";
import ReplyCommentInput from "./ReplyCommentInput";
import { useAxiosWithAuth } from "../../../hooks/useAxiosWithAuth";
import { ChildComment, ParentComment } from "comment";
import { Reply } from "./Reply";
import { Modal } from "../../common/Modal/Modal";
import { GButton, WButton } from "../../../assets/styles/style";
import { useUserData } from "../../../hooks/useUserData";
import CommentEdit from "./CommentEdit";

interface CommentProps {
  comment: ParentComment;
  onDeleteComment: (commentId: string) => void;
  onUpdateComment: (commentId: string, newContent: string) => void;
}

export const Comment: React.FC<CommentProps> = ({
  comment,
  onDeleteComment,
  onUpdateComment,
}) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showEditCommentInput, setShowEditCommentInput] = useState(false);
  const [replys, setReplys] = useState<ChildComment[]>(comment.childComments);
  const [showModal, setShowModal] = useState(false);
  const { isAuthUser } = useUserData();

  const axiosInstance = useAxiosWithAuth();

  // Reply Method

  const onSubmitReply = (newContent: string) => {
    if (newContent === "") {
      window.alert("댓글을 작성해 주세요.");
      return;
    }

    const data = {
      content: newContent,
      reviewId: comment.reviewId,
      parentCommentId: comment.id,
    };

    axiosInstance.post("/comment/reply", data).then((res) => {
      if (res.status === 201) {
        setReplys([...replys, res.data]);
      }
    });
  };

  const onUpdateReply = (replyId: string, newContent: string) => {
    axiosInstance
      .patch(`/comment/${replyId}`, { content: newContent })
      .then((res) => {
        if (res.status === 201) {
          const newReplys = replys.map((reply) =>
            reply.id === replyId ? { ...reply, content: newContent } : reply
          );

          setReplys(newReplys);
        }
      });
  };

  const onSubmitUpdatedComment = (newContent: string) => {
    onUpdateComment(comment.id, newContent);
    EditCommentHandler();
  };

  const onDeleteReply = (replyId: string) => {
    axiosInstance.delete(`/comment/${replyId}`).then((res) => {
      if (res.status === 204) {
        const newComments = replys.filter((reply) => reply.id !== replyId);
        setReplys(newComments);
      }
    });
  };

  // show UI Method

  const EditCommentHandler = () => {
    setShowEditCommentInput(!showEditCommentInput);
  };

  const replyInputHandler = () => {
    setShowReplyInput(!showReplyInput);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
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
          <GButton
            onClick={() => {
              onDeleteComment(comment.id);
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
        {isAuthUser(comment.user.id) && (
          <S.CommentAction>
            {showEditCommentInput ? (
              <></>
            ) : (
              <button onClick={EditCommentHandler}>수정</button>
            )}
            <button
              onClick={() => {
                showModalHandler();
              }}
            >
              삭제
            </button>
          </S.CommentAction>
        )}
      </S.CommentHeader>
      <S.CommentBody>
        {showEditCommentInput ? (
          <CommentEdit
            originContent={comment.content}
            onClose={EditCommentHandler}
            onSubmitComment={onSubmitUpdatedComment}
          ></CommentEdit>
        ) : (
          <p>{comment.content}</p>
        )}
      </S.CommentBody>
      <S.CommentOption>
        <button className="write-reply" onClick={replyInputHandler}>
          답글({replys.length})
        </button>
      </S.CommentOption>

      {showReplyInput && (
        <div>
          {replys.map((reply) => (
            <Reply
              comment={reply}
              onDeleteReply={onDeleteReply}
              onUpdateReply={onUpdateReply}
            />
          ))}
          <ReplyCommentInput onSubmitReply={onSubmitReply}></ReplyCommentInput>
        </div>
      )}
    </S.CommentContainer>
  );
};
