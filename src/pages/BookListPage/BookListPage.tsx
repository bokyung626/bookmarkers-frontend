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
import { Pagination } from "../../components/specific/Pagination/Pagination";

export const BookListPage: React.FC = () => {
  const { id } = useParams();
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit: number = 20;

  useEffect(() => {
    setPage(1);
  }, [id]);

  useEffect(() => {
    axios
      .post("/book/search", {
        d_titl: id,
        offset: (page - 1) * limit + 1,
        limit,
      })
      .then((res: any) => {
        setBookList(res.data.items);
        setTotal(res.data.total);
      });
  }, [page, id]);

  const onPageChange = (page: number) => {
    if (page > 0 && page <= Math.ceil(total / limit)) {
      setPage(page);
      window.scrollTo({ top: 0 });
    }
  };

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
      {bookList.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(total / limit)}
          onPageChange={onPageChange}
        ></Pagination>
      )}
    </BookListPageConatiner>
  );
};
