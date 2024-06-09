import React, { useEffect, useState } from "react";
import {
  GButton,
  PageContainer,
  SectionTitle,
  WButton,
} from "../../assets/styles/style";
import * as Styled from "./style";
import axios, { AxiosResponse } from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Review } from "../../types/review";
import dayjs from "dayjs";
import { UserProfile } from "../../components/common/User/UserProfile";
import { Book } from "../../types/book";
import { Modal } from "../../components/common/Modal/Modal";
import { useAxiosWithAuth } from "../../hooks/useAxiosWithAuth";
import { CommentInput, CommentList } from "../../components/specific/Comment";
import { ParentComment } from "../../types/comment";
import { useUserData } from "../../hooks/useUserData";

export const ViewReviewPage = () => {
  const [review, setReview] = useState<Review | null>(null);
  const [book, setBook] = useState<Book | null>(null);
  const [comments, setComments] = useState<ParentComment[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const { isAuthUser } = useUserData();
  const [modalContent, setModalContent] = useState("");
  const { id } = useParams();
  const axiosInstance = useAxiosWithAuth();
  const navigete = useNavigate();

  useEffect(() => {
    axios.get(`/review/${id}`).then((res: AxiosResponse) => {
      // 리뷰가 존재하는 경우
      if (res.data) {
        setReview(res.data);
        setComments(res.data.comments);

        axios
          .post("/book/searchByISBN", { isbn: res.data.isbn })
          .then((res: any) => {
            setBook(res.data.items[0]);
          });
      }
    });
  }, [id]);

  const onDeleteReview = () => {
    axiosInstance.delete(`/review/${review?.id}`).then((res) => {
      if (res.status === 204) {
        window.alert("독서노트가 삭제되었습니다.");
        navigete("/");
      }
    });
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  // Comment Method

  const onSubmitComment = (content: string) => {
    if (content === "") {
      window.alert("댓글을 작성해 주세요.");
      return;
    }

    const data = {
      content: content,
      reviewId: id,
    };

    axiosInstance.post("/comment", data).then((res) => {
      if (res.status === 201) {
        setComments([...comments, res.data]);
      }
    });
  };

  const onDeleteComment = (commentId: string) => {
    axiosInstance.delete(`/comment/${commentId}`).then((res) => {
      if (res.status === 204) {
        window.alert("댓글이 삭제되었습니다.");
        const newComments = comments.filter(
          (comment) => comment.id !== commentId
        );
        setComments(newComments);
      }
    });
  };

  const onUpdateComment = (commentId: string, newContent: string) => {
    axiosInstance
      .patch(`/comment/${commentId}`, { content: newContent })
      .then((res) => {
        if (res.status === 201) {
          const newComments = comments.map((comment) =>
            comment.id === commentId
              ? { ...comment, content: newContent }
              : comment
          );

          setComments(newComments);
        }
      });
  };

  if (!review) return <PageContainer>존재하지 않는 리뷰입니다.</PageContainer>;

  return (
    review && (
      <PageContainer>
        {showModal && (
          <Modal
            active={showModal}
            onClose={closeModalHandler}
            title={modalTitle}
            content={modalContent}
          >
            <WButton onClick={closeModalHandler}>취소</WButton>
            <GButton onClick={onDeleteReview}>확인</GButton>
          </Modal>
        )}
        <Styled.ReviewContainer>
          <Styled.ReviewHeader>
            <Styled.ReviewTitle>{review.title}</Styled.ReviewTitle>
            <Styled.ReviewInfo>
              <UserProfile
                url={review.user.profileImage}
                nickname={review.user.nickname}
              ></UserProfile>
              <p>{dayjs(review.createdAt).format("YYYY.MM.DD HH:MM")}</p>
            </Styled.ReviewInfo>
          </Styled.ReviewHeader>
          {book && (
            <Styled.BookInfoContainer>
              <Styled.BookImage>
                <img src={book.image} alt={book.title} />
              </Styled.BookImage>
              <Styled.BookInfoWarraper>
                <p>제목 : {book.title}</p>
                <p>
                  작가/출판사 : {book.author}/{book.publisher}
                </p>
                <p>출간일 : {book.pubdate}</p>
              </Styled.BookInfoWarraper>
            </Styled.BookInfoContainer>
          )}
          <Styled.ReviewMemory>"{review.memory}"</Styled.ReviewMemory>
          <Styled.ReviewContent>{review.content}</Styled.ReviewContent>
        </Styled.ReviewContainer>
        {isAuthUser(review.user.id) && (
          <Styled.ReviewActionContainer>
            <GButton
              onClick={() => {
                navigete(`/review/edit/${review.id}`);
              }}
            >
              수정
            </GButton>
            <GButton
              onClick={() => {
                showModalHandler("독서노트 삭제", "정말로 삭제하시겠습니까?");
              }}
            >
              삭제
            </GButton>
          </Styled.ReviewActionContainer>
        )}
        <SectionTitle>댓글 {comments.length}개</SectionTitle>
        <CommentInput onSubmitComment={onSubmitComment}></CommentInput>
        <CommentList
          comments={comments}
          onUpdateComment={onUpdateComment}
          onDeleteComment={onDeleteComment}
        ></CommentList>
      </PageContainer>
    )
  );
};
