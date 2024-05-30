import React, { ChangeEvent, useState } from "react";
import {
  GButton,
  Input,
  PageContainer,
  SectionTitle,
  TextArea,
} from "../../assets/styles/style";
import { BookReadingContainer, Content } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAxiosWithAuth } from "../../hooks/useAxiosWithAuth";

const CONTENT_LIMIT = 1000;
const MEMORY_LIMIT = 300;
const TITLE_LIMIT = 30;

export const WriteBookReading = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [memory, setMemory] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosInstance = useAxiosWithAuth();

  const onSubmitHandler = () => {
    if (title === "" || content === "") {
      window.alert("제목과 내용을 입력해 주세요.");
      return;
    }

    const data = {
      title: title,
      content: content,
      memory: memory,
      isbn: id,
    };

    axiosInstance.post("/review", data).then((res) => {
      if (res.status === 201) {
        window.alert("독서노트가 작성되었습니다.");
        navigate(`/readingnote/view/${res.data}`);
      }
    });
  };

  const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (content.length === CONTENT_LIMIT) {
      setTitle(e.target.value);
    } else {
      setTitle(e.target.value.slice(0, TITLE_LIMIT));
    }
  };

  const inputContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (content.length === CONTENT_LIMIT) {
      setContent(e.target.value);
    } else {
      setContent(e.target.value.slice(0, CONTENT_LIMIT));
    }
  };

  const inputMemory = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (content.length === MEMORY_LIMIT) {
      setMemory(e.target.value);
    } else {
      setMemory(e.target.value.slice(0, MEMORY_LIMIT));
    }
  };

  return (
    <PageContainer>
      <SectionTitle>독서노트 작성</SectionTitle>
      <BookReadingContainer>
        <Input
          type="text"
          placeholder="제목을 작성해 주세요."
          onChange={inputTitle}
        ></Input>
        <TextArea
          value={content}
          placeholder="줄거리나 느낀 점을 작성해 주세요."
          onChange={inputContent}
        ></TextArea>
        <span>{content.length}/1000</span>
        <span>기억에 남는 구절</span>
        <Content
          value={memory}
          placeholder="기억에 남는 문장이나 구절을 작성해 주세요."
          onChange={inputMemory}
        ></Content>
        <span>{memory.length}/300</span>
        <GButton onClick={onSubmitHandler}>독서노트 작성</GButton>
      </BookReadingContainer>
    </PageContainer>
  );
};
