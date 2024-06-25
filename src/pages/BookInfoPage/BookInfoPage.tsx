import React, { useEffect, useState } from "react";
import { PageContainer, SectionTitle } from "../../assets/styles/style";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import * as Styled from "./style";
import { Book } from "../../types/book";
import { ReviewList } from "../../components/specific/ReviewList/ReviewList";

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
      <SectionTitle>
        <span>이 책의 독서노트</span>
      </SectionTitle>
      <Styled.ReadingNoteContainer>
        {reviews.length > 0 ? (
          <></>
        ) : (
          <span>아직 이 책의 독서노트가 없습니다..</span>
        )}
      </Styled.ReadingNoteContainer>
      <ReviewList reviews={reviews}></ReviewList>
      <SectionTitle>
        <span>이 책의 필사노트</span>
      </SectionTitle>
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
