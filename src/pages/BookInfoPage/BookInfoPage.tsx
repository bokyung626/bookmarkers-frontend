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
import dayjs from "dayjs";

interface Review {
  id: string;
  title: string;
  content: string;
  memory: string;
  createdAt: Date;
  isbn: string;
  user: {
    id: string;
    nickname: string;
    email: string;
    profileImage: string | null;
  };
}

export const BookInfoPage = () => {
  const [reviews, setReviews] = useState([]);
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
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.post("/book/searchByISBN", { isbn: id }).then((res: any) => {
      setBook(res.data);
    });

    axios.get(`/review/isbn/${id}`).then((res) => {
      setReviews(res.data);
      console.log(res.data);
    });
  }, []);

  const onClickCardHandler = (postId: string) => {
    navigate(`/readingnote/view/${postId}`);
  };

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
        {reviews.length > 0 ? (
          <></>
        ) : (
          <span>아직 이 도서의 독서노트가 없습니다..</span>
        )}
      </ReadingNoteContainer>
      <CardContainer>
        {reviews.map((review: Review) => (
          <Card
            key={review.id}
            onClick={() => {
              onClickCardHandler(review.id);
            }}
          >
            <ImageContainer>
              <CardImage src={book.image} alt={book.title} />
            </ImageContainer>
            <CardContent>
              <h4>{review.title}</h4>
              <p>{review.content}</p>
              <p>{dayjs(review.createdAt).format("YYYY-MM-DD")}</p>
            </CardContent>
            <p>{review.user.nickname}</p>
          </Card>
        ))}
      </CardContainer>
      <SectionTitle>이 책의 필사노트</SectionTitle>
    </PageContainer>
  );
};
