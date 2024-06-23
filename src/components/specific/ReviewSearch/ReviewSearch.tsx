import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

interface ReviewSearchProps {
  onSearch: (search: string) => void;
}

export const ReviewSearch: React.FC<ReviewSearchProps> = ({ onSearch }) => {
  const [selectedOption, setSelectedOption] = useState("title");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // select 태그 이벤트 핸들러
  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "title") {
      setSelectedOption("title");
    } else if (e.target.value === "content") {
      setSelectedOption("content");
    } else {
      setSelectedOption("writer");
    }
  };

  // 검색
  const onSearchHandler = () => {
    onSearch(`${selectedOption}=${searchValue}`);
  };

  return (
    <S.Container>
      <S.SearchContainer>
        <S.SelectContainer>
          <S.Select
            name="search-option"
            id="search-option"
            onChange={onSelectHandler}
          >
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="nickname">작성자</option>
          </S.Select>
        </S.SelectContainer>
        <S.SearchInput
          type="text"
          placeholder="검색어를 입력하세요."
          value={searchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") onSearchHandler();
          }}
        />
        <S.SearchButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            onSearchHandler();
          }}
        >
          <S.SearchIcon icon={faSearch} />
        </S.SearchButton>
      </S.SearchContainer>
    </S.Container>
  );
};
