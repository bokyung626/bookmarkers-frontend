import React, { useState } from "react";
import * as S from "./style";

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
  const [pageGroup, setPageGroup] = useState(
    Math.floor((currentPage - 1) / 10)
  );

  const handlePageChange = (page: number) => {
    onPageChange(page);
    setPageGroup(Math.floor((page - 1) / 10));
  };

  const startPage = pageGroup * 10 + 1;
  const endPage = Math.min(startPage + 9, totalPages);
  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <S.PaginationContainer>
      {currentPage > 1 && (
        <S.PrevButton
          onClick={() => handlePageChange(Math.max(startPage - 10, 1))}
        >
          이전 페이지
        </S.PrevButton>
      )}
      {pages.map((page) => (
        <S.PageButton
          key={page}
          onClick={() => {
            onPageChange(page);
          }}
          active={currentPage === page}
        >
          {page}
        </S.PageButton>
      ))}
      {currentPage < totalPages && (
        <S.NextButton
          onClick={() => handlePageChange(Math.min(endPage + 1, totalPages))}
        >
          다음 페이지
        </S.NextButton>
      )}
    </S.PaginationContainer>
  );
};
