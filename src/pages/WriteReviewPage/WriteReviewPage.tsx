import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import {
  GButton,
  Input,
  PageContainer,
  SectionTitle,
  TextArea,
} from "../../assets/styles/style";
import { BookReadingContainer, ThumnailBox } from "./style";
import { useParams, useNavigate } from "react-router-dom";
import { useAxiosWithAuth } from "../../hooks/useAxiosWithAuth";
import { AutoResizeTextarea } from "../../components/common/AutoResizeTextarea/AutoResizeTextarea";
import axios from "axios";
import { Book } from "../../types/book";

const CONTENT_LIMIT = 1000;
const MEMORY_LIMIT = 300;
const TITLE_LIMIT = 30;
const MAX_FILE_SIZE = 2 * 1024 * 1024;

export const WriteReviewPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [memory, setMemory] = useState("");
  const [thumnailFile, setThumnailFile] = useState("");
  const [image, setImage] = useState("");
  const [book, setBook] = useState<Book | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosInstance = useAxiosWithAuth();
  const fileInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    axios.post("/book/searchByISBN", { isbn: id }).then((res: any) => {
      if (res.data.items.length > 0) {
        setBook(res.data.items[0]);
      }
    });
  }, [id]);

  const onChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        window.alert("파일 용량은 2MB를 초과할 수 없습니다.");
        return;
      }
      setThumnailFile(file);
    } else {
      //업로드 취소할 시
      setImage("");
      return;
    }
    //화면에 사진 표시
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result as string);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const onSubmitHandler = () => {
    if (title === "" || content === "") {
      window.alert("제목과 내용을 입력해 주세요.");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("memory", memory);
    formData.append("isbn", id!);

    if (thumnailFile) {
      formData.append("file", thumnailFile);
    } else {
      if (book) formData.append("image", book.image);
    }

    axiosInstance
      .post("/review", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          window.alert("독서노트가 작성되었습니다.");
          navigate(`/review/${res.data}`);
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

  if (!book) {
    return <PageContainer>유효하지 않은 도서에 대한 접근입니다.</PageContainer>;
  }

  return (
    <PageContainer>
      <SectionTitle>
        <span>독서노트 작성</span>
      </SectionTitle>
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
        <AutoResizeTextarea
          placeholder="기억에 남는 구절을 작성해 주세요. 큰 따옴표는 생략해 주세요."
          onChange={inputMemory}
          value={memory}
        ></AutoResizeTextarea>
        <span>{memory.length}/300</span>
        <span>썸네일 업로드</span>
        <ThumnailBox
          onClick={() => {
            if (fileInput.current) fileInput.current.click();
          }}
        >
          <img src={image} alt="" />
        </ThumnailBox>
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/jpg,image/png,image/jpeg"
          name="profile_img"
          onChange={onChange}
          ref={fileInput}
        />
        <GButton onClick={onSubmitHandler}>독서노트 작성</GButton>
      </BookReadingContainer>
    </PageContainer>
  );
};
