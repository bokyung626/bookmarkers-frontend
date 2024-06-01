import React, { useEffect, useState } from "react";
import { GButton, PageContainer } from "../../assets/styles/style";
import * as Styled from "./style";
import axios, { AxiosResponse } from "axios";
import { useParams } from "react-router-dom";
import { Review } from "../../types/review";
import dayjs from "dayjs";
import { UserProfile } from "../../components/specific/UserProfile/UserProfile";
import { Book } from "../../types/book";

export const ViewReviewPage = () => {
  const [review, setReview] = useState<Review | null>(null);
  const [book, setBook] = useState<Book | null>(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/review/${id}`).then((res: AxiosResponse) => {
      setReview(res.data);

      axios
        .post("/book/searchByISBN", { isbn: res.data.isbn })
        .then((res: any) => {
          setBook(res.data.items[0]);
        });
    });
  }, []);

  if (!review && !book) return <></>;

  return (
    review && (
      <PageContainer>
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
          <GButton>삭제</GButton>
        </Styled.ReviewActionContainer>
      </PageContainer>
    )
  );
};
