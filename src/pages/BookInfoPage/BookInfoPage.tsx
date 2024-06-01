import React, { useEffect, useState } from "react";
import {
  Card,
  CardContainer,
  PageContainer,
  SectionTitle,
} from "../../assets/styles/style";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import * as Styled from "./style";
import dayjs from "dayjs";
import { Review } from "../../types/review";
import { Book } from "../../types/book";
import textSlicer from "../../utils/textSlicer";
import { UserProfile } from "../../components/specific/UserProfile/UserProfile";

export const BookInfoPage = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [copynotes, setCopynotes] = useState([]);
  const [book, setBook] = useState<Book | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.post("/book/searchByISBN", { isbn: id }).then((res: any) => {
      if (res.data.items.length > 0) {
        setBook(res.data.items[0]);
      }
    });

    axios.get(`/review/isbn/${id}`).then((res) => {
      setReviews(res.data);
    });
  }, []);

  const onClickCardHandler = (postId: string) => {
    navigate(`/review/view/${postId}`);
  };

  if (!book)
    return (
      <PageContainer>
        해당 ISBN에 관련한 책 정보를 찾을 수 없습니다.
      </PageContainer>
    );

  return (
    <PageContainer>
      <Styled.BookInfoContainer>
        <Styled.BookInfoMenu></Styled.BookInfoMenu>
        <Styled.BooKInfoWrapper>
          <Styled.BookImage>
            <img src={book.image} alt={book.title} />
          </Styled.BookImage>
          <Styled.BookDesc>
            <Styled.BookTitle>{book.title}</Styled.BookTitle>
            <Styled.BookAuthor>
              {book.author} / {book.publisher}
            </Styled.BookAuthor>
            <Styled.BookDescription>{book.description}</Styled.BookDescription>
          </Styled.BookDesc>
        </Styled.BooKInfoWrapper>
      </Styled.BookInfoContainer>
      <Styled.ButtonContainer>
        <Styled.WriteReadingNoteButton
          onClick={() => {
            navigate(`/review/write/${id}`);
          }}
        >
          독서노트 작성
        </Styled.WriteReadingNoteButton>
      </Styled.ButtonContainer>
      <SectionTitle>이 책의 독서노트</SectionTitle>
      <Styled.ReadingNoteContainer>
        {reviews.length > 0 ? (
          <></>
        ) : (
          <span>아직 이 책의 독서노트가 없습니다..</span>
        )}
      </Styled.ReadingNoteContainer>
      <CardContainer>
        {reviews.map((review: Review) => (
          <Card
            key={review.id}
            onClick={() => {
              onClickCardHandler(review.id);
            }}
          >
            <Styled.ImageContainer>
              <Styled.CardImage src={book.image} alt={book.title} />
            </Styled.ImageContainer>
            <Styled.CardContent>
              <h4>{textSlicer(review.title, 15)}</h4>
              <p className="post-content">{textSlicer(review.content, 30)}</p>
              <p className="post-day">
                {dayjs(review.createdAt).format("YYYY-MM-DD")}
              </p>
            </Styled.CardContent>
            <UserProfile
              url={review.user.profileImage}
              nickname={review.user.nickname}
            ></UserProfile>
          </Card>
        ))}
      </CardContainer>
      <SectionTitle>이 책의 필사노트</SectionTitle>
      <Styled.CopyNoteContainer>
        {copynotes.length > 0 ? (
          <></>
        ) : (
          <span>아직 이 책의 필사노트가 없습니다..</span>
        )}
      </Styled.CopyNoteContainer>
    </PageContainer>
  );
};
