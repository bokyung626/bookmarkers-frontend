import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { Book } from "book";
import { useNavigate } from "react-router-dom";

export const RecommentBook: React.FC = () => {
  const [isbnList, setIsbnList] = useState([
    "9791190090261",
    "9791189327156",
    // "9788936434120",
    // "9788936434595",
    // "9788937460883",
  ]);
  const [books, setBooks] = useState<Book[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        // const newList = await Promise.all(
        //   isbnList.map(async (isbn) => {
        //     const res = await axios.post("/book/searchByISBN", { isbn });
        //     if (res.data.items.length > 0) {
        //       return res.data.items[0];
        //     }
        //     return null; // 결과가 없으면 null 반환
        //   })
        // );

        // const filteredList = newList.filter((item) => item !== null);
        // setBooks(filteredList);

        const newList = await axios.post("/book/searchByISBN", {
          isbn: isbnList.join(","),
        });

        console.log(newList);
        // const filteredList = newList.filter((item) => item !== null);
        // setBooks(filteredList);
      } catch (err) {}
    })();
  }, []);

  return (
    <S.RecommentBookContainer>
      <S.BookList>
        {books.map((book: Book) => (
          <S.BookItem
            key={book.isbn}
            onClick={() => {
              navigate(`/bookinfo/${book.isbn}`);
            }}
          >
            <img src={book.image} alt={book.isbn} />
            {book.title}
          </S.BookItem>
        ))}
      </S.BookList>
    </S.RecommentBookContainer>
  );
};
