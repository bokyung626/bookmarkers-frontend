import React, { useEffect, useState } from "react";
import { PageContainer, SectionTitle } from "../../assets/styles/style";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  BookAuthor,
  BookDesc,
  BookDescription,
  BookImage,
  BookInfoContainer,
  BookTitle,
} from "./style";

export const BookInfoPage = () => {
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
        <BookImage src={book.image} alt={book.title} />
        <BookDesc>
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>
            {book.author} / {book.publisher}
          </BookAuthor>
          <BookDescription>{book.description}</BookDescription>
        </BookDesc>
      </BookInfoContainer>
      <SectionTitle>이 책의 독후감</SectionTitle>
    </PageContainer>
  );
};
