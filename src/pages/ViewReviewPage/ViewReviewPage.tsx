import React, { useEffect, useState } from "react";
import {
  GButton,
  PageContainer,
  SectionTitle,
  WButton,
} from "../../assets/styles/style";
import * as Styled from "./style";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import { Review } from "../../types/review";
import dayjs from "dayjs";
import { UserProfile } from "../../components/common/User/UserProfile";
import { Book } from "../../types/book";
import { Modal } from "../../components/common/Modal/Modal";
import { useAxiosWithAuth } from "../../hooks/useAxiosWithAuth";
import { CommentInput, CommentList } from "../../components/specific/Comment";

export const ViewReviewPage = () => {
  const [review, setReview] = useState<Review | null>(null);
  const [book, setBook] = useState<Book | null>(null);
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const { id } = useParams();
  const axiosInstance = useAxiosWithAuth();

  useEffect(() => {
    axios.get(`/review/${id}`).then((res: AxiosResponse) => {
      setReview(res.data);

      axios
        .post("/book/searchByISBN", { isbn: res.data.isbn })
        .then((res: any) => {
          setBook(res.data.items[0]);
        });
    });

    axios.get(`/comment/${id}`).then((res: AxiosResponse) => {
      setComments(res.data);
    });
  }, []);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = (title: string, content: string) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

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
        console.log("댓글이 작성되었습니다.");
        //navigate(`/review/view/${res.data}`);
      }
    });
  };

  if (!review && !book) return <></>;

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
            <GButton>확인</GButton>
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
        <Styled.ReviewActionContainer>
          <GButton>수정</GButton>
          <GButton
            onClick={() => {
              showModalHandler("독서노트 삭제", "정말로 삭제하시겠습니까?");
            }}
          >
            삭제
          </GButton>
        </Styled.ReviewActionContainer>
        <SectionTitle>댓글 {comments.length}개</SectionTitle>
        <CommentInput onSubmitComment={onSubmitComment}></CommentInput>
        <CommentList comments={comments}></CommentList>
      </PageContainer>
    )
  );
};
