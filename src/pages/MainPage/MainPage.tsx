import React from "react";
import { BookSearch } from "../../components/specific/BookSearch/BookSearch";
import { PageContainer, SectionTitle } from "../../assets/styles/style";
import { Slider } from "../../components/common/Slider/Slider";

export const MainPage = () => {
  return (
    <PageContainer>
      <BookSearch></BookSearch>
      <SectionTitle>오늘의 추천 도서</SectionTitle>
      <Slider></Slider>
      <SectionTitle>오늘의 추천 독서노트</SectionTitle>
    </PageContainer>
  );
};
