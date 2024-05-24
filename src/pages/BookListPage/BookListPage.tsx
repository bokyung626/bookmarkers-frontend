import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BookDesc,
  BookImg,
  BookList,
  BookListItem,
  BookListPageConatiner,
  TotalMsg,
} from "./style";

import { BookSearch } from "../../components/specific/BookSearch/BookSearch";
import axios from "axios";

export const BookListPage = (props: any) => {
  const { id } = useParams();
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(console.log(id));
    axios.post("/book/search", { d_titl: id, start: page }).then((res: any) => {
      setBookList(res.data.items);
      setTotal(res.data.total);
      console.log(res.data);
    });
  }, [page]);

  const sliceDesc = (desc: string) => {
    if (desc.length > 100) {
      return `${desc.slice(0, 100)}...`;
    }
    return desc;
  };

  return (
    <BookListPageConatiner>
      <BookSearch></BookSearch>
      <TotalMsg>검색결과 : {total}건</TotalMsg>
      <BookList>
        {bookList.length > 0 ? (
          bookList.map((book: any, index) => (
            <BookListItem>
              <img className="image" src={book.image} alt={book.title} />
              <BookDesc>
                <span className="title">{book.title}</span>
                <span className="author">
                  {book.author} / {book.publisher}
                </span>
                <span className="desc">{sliceDesc(book.description)}</span>
              </BookDesc>
            </BookListItem>
          ))
        ) : (
          <h1>검색된 도서가 없습니다.</h1>
        )}
      </BookList>
    </BookListPageConatiner>
  );
};
