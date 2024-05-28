import React, { useEffect, useState } from "react";
import { PageContainer, SectionTitle } from "../../assets/styles/style";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  BooKInfoWrapper,
  BookAuthor,
  BookDesc,
  BookDescription,
  BookImage,
  BookInfoContainer,
  BookInfoMenu,
  BookTitle,
  Card,
  CardContainer,
  CardContent,
  CardImage,
  ImageContainer,
  ReadingNoteContainer,
  WriteReadingNoteButton,
} from "./style";

export const BookInfoPage = () => {
  const [readingNotes, setReadingNotes] = useState([]);
  const navigete = useNavigate();
  const [book, setBook] = useState({
    author: "",
    description: "",
    discount: "",
    image: "",
    isbn: "",
    link: "",
    pubdate: "",
    publisher: "",
    title: "",
  });
  const { id } = useParams();
  useEffect(() => {
    axios.post("/book/searchByISBN", { isbn: id }).then((res: any) => {
      console.log(res.data);
      setBook(res.data);
    });
  }, []);

  return (
    <PageContainer>
      <BookInfoContainer>
        <BookInfoMenu>
          <WriteReadingNoteButton
            onClick={() => {
              navigete(`/readingnote/write/${id}`);
            }}
          >
            독서노트 작성
          </WriteReadingNoteButton>
        </BookInfoMenu>
        <BooKInfoWrapper>
          <BookImage src={book.image} alt={book.title} />
          <BookDesc>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>
              {book.author} / {book.publisher}
            </BookAuthor>
            <BookDescription>{book.description}</BookDescription>
          </BookDesc>
        </BooKInfoWrapper>
      </BookInfoContainer>

      <SectionTitle>이 책의 독서노트</SectionTitle>
      <ReadingNoteContainer>
        {readingNotes.length > 0 ? (
          <></>
        ) : (
          <span>아직 이 도서의 독서노트가 없습니다..</span>
        )}
      </ReadingNoteContainer>
      <CardContainer>
        <Card>
          <ImageContainer>
            <CardImage src={book.image} alt={book.title} />
          </ImageContainer>
          <CardContent>
            <h4>이 책 강추해요</h4>
            <p></p>
          </CardContent>
        </Card>
      </CardContainer>
    </PageContainer>
  );
};
