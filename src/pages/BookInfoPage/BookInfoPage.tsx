import React, { useEffect, useState } from "react";
import { PageContainer, SectionTitle } from "../../assets/styles/style";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./style";
import { Book } from "book";
import { ReviewList } from "../../components/specific/ReviewList/ReviewList";

export const BookInfoPage: React.FC = () => {
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

    axios.get(`/review?isbn=${id}`).then((res) => {
      setReviews(res.data);
    });
  }, []);

  if (!book)
    return (
      <PageContainer>
        해당 ISBN에 관련한 책 정보를 찾을 수 없습니다.
      </PageContainer>
    );

  return (
    <PageContainer>
      <SectionTitle>
        <span>도서 정보</span>
      </SectionTitle>
      <S.BookInfoContainer>
        <S.BookInfoMenu></S.BookInfoMenu>
        <S.BooKInfoWrapper>
          <S.BookImage>
            <img src={book.image} alt={book.title} />
          </S.BookImage>
          <S.BookDesc>
            <S.BookTitle>{book.title}</S.BookTitle>
            <S.BookAuthor>
              {book.author} / {book.publisher}
            </S.BookAuthor>
            <S.BookDescription>{book.description}</S.BookDescription>
          </S.BookDesc>
        </S.BooKInfoWrapper>
      </S.BookInfoContainer>
      <S.ButtonContainer>
        <S.WriteReadingNoteButton
          onClick={() => {
            navigate(`/review/write/${id}`);
          }}
        >
          독서노트 작성
        </S.WriteReadingNoteButton>
      </S.ButtonContainer>
      <SectionTitle>
        <span>이 책의 독서노트</span>
      </SectionTitle>
      <S.ReadingNoteContainer>
        {reviews.length > 0 ? (
          <></>
        ) : (
          <span>아직 이 책의 독서노트가 없습니다..</span>
        )}
      </S.ReadingNoteContainer>
      <ReviewList reviews={reviews}></ReviewList>
      <SectionTitle>
        <span>이 책의 필사노트</span>
      </SectionTitle>
      <S.CopyNoteContainer>
        {copynotes.length > 0 ? (
          <></>
        ) : (
          <span>아직 이 책의 필사노트가 없습니다..</span>
        )}
      </S.CopyNoteContainer>
    </PageContainer>
  );
};
