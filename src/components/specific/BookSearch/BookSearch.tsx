import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  SearchButton,
  SearchContainer,
  SearchIcon,
  SearchInput,
  Select,
  SelectContainer,
} from "./style";
import axios from "axios";

export const BookSearch = () => {
  const navigate = useNavigate();
  const [bookTitle, setBookTitle] = useState("");
  const [expanded, setExpanded] = useState(false);

  // useEffect(() => {}, [search]);
  const onSearchHandler = async (e: any) => {
    e.preventDefault();
    navigate(`/booklist/${bookTitle}}`);
  };

  return (
    <Container>
      <SearchContainer>
        <SelectContainer>
          <Select name="search-option" id="search-option">
            <option value="title">제목</option>
            <option value="author">저자</option>
            <option value="publisher">출판사</option>
          </Select>
        </SelectContainer>
        <SearchInput
          type="text"
          placeholder="검색어를 입력하세요..."
          value={bookTitle}
          onChange={(e) => {
            setBookTitle(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") navigate(`/booklist/${bookTitle}`);
          }}
        />
        <SearchButton onClick={onSearchHandler}>
          <SearchIcon icon={faSearch} />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
};
