import React, { useState } from "react";
import {
  NextButton,
  PageButton,
  PaginationContainer,
  PrevButton,
} from "./style";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [pageList, setPageList] = useState([]);
  const [pageGroup, setPageGroup] = useState(Math.floor((currentPage - 1) / 5));

  const handlePageChange = (page: number) => {
    onPageChange(page);
    setPageGroup(Math.floor((page - 1) / 5));
  };

  const startPage = pageGroup * 5 + 1;
  const endPage = Math.min(startPage + 4, totalPages);
  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <PrevButton
          onClick={() => handlePageChange(Math.max(startPage - 5, 1))}
        >
          이전 페이지
        </PrevButton>
      )}
      {pages.map((page) => (
        <PageButton
          onClick={() => {
            onPageChange(page);
          }}
          active={currentPage === page}
        >
          {page}
        </PageButton>
      ))}
      {currentPage !== totalPages && (
        <NextButton
          onClick={() => handlePageChange(Math.min(endPage + 1, totalPages))}
        >
          다음 페이지
        </NextButton>
      )}
    </PaginationContainer>
  );
};
