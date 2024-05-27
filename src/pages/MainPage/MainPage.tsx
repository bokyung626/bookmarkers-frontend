import React from "react";
import { MainPageContainer } from "./style";
import { BookSearch } from "../../components/specific/BookSearch/BookSearch";
import { PageContainer, SectionTitle } from "../../assets/styles/style";

export const MainPage = () => {
  return (
    <PageContainer>
      <BookSearch></BookSearch>
      <SectionTitle>오늘의 추천 도서</SectionTitle>
      <SectionTitle>오늘의 추천 독서노트</SectionTitle>
    </PageContainer>
  );
};
