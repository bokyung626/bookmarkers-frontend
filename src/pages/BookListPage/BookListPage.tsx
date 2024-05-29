import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  BookDesc,
  BookImage,
  BookList,
  BookListItem,
  BookTitle,
  TotalMsg,
} from "./style";

import { BookSearch } from "../../components/specific/BookSearch/BookSearch";
import axios from "axios";
import { Pagination } from "../../components/specific/Pagination/Pagination";
import { PageContainer, SectionTitle } from "../../assets/styles/style";

export const BookListPage: React.FC = () => {
  const { id } = useParams();
  const [bookList, setBookList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit: number = 20;
  const navigate = useNavigate();

  useEffect(() => {
    setPage(1);
  }, [id]);

  useEffect(() => {
    axios
      .post("/book/searchByName", {
        d_titl: id,
        offset: (page - 1) * limit + 1,
        limit,
      })
      .then((res: any) => {
        setBookList(res.data.items);
        if (res.data.total >= 1000) {
          setTotal(1000);
        } else {
          setTotal(res.data.total);
        }
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
    <PageContainer>
      <BookSearch></BookSearch>
      <SectionTitle>
        '<span>{id}</span>'에 대한 검색결과
      </SectionTitle>
      <TotalMsg>총 {total}건</TotalMsg>
      <BookList>
        {bookList.length > 0 ? (
          bookList.map((book: any) => (
            <BookListItem
              key={book.isbn}
              onClick={() => {
                navigate(`/bookinfo/${book.isbn}`);
              }}
            >
              <BookImage>
                <img className="image" src={book.image} alt={book.title} />
              </BookImage>
              <BookDesc>
                <BookTitle className="title">{book.title}</BookTitle>
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
    </PageContainer>
  );
};
