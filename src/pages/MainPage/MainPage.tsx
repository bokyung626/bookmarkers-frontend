import React from "react";
import { MainPageContainer } from "./style";
import { BookSearch } from "../../components/specific/BookSearch/BookSearch";

export const MainPage = () => {
  return (
    <MainPageContainer>
      <BookSearch></BookSearch>
      <h2>오늘의 추천 도서</h2>
      <h2>오늘의 추천 리뷰</h2>
    </MainPageContainer>
  );
};
