import React from "react";
import {
  GButton,
  Input,
  PageContainer,
  SectionTitle,
  TextArea,
} from "../../assets/styles/style";
import { BookReadingContainer } from "./style";

export const WriteBookReading = () => {
  return (
    <PageContainer>
      <SectionTitle>독서노트 작성</SectionTitle>
      <BookReadingContainer>
        <Input type="text" placeholder="독서노트 제목*"></Input>
        <TextArea placeholder="줄거리나 느낀 점을 작성해 주세요."></TextArea>
        <span>기억에 남는 글귀(1/5)</span>
        <Input type="text" placeholder="기억에 남는 글귀"></Input>
        <GButton>독서노트 작성</GButton>
      </BookReadingContainer>
    </PageContainer>
  );
};
