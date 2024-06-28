import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

export const BookSearch: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("title");
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  // select 태그 이벤트 핸들러
  const onSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "isbn") {
      setSelectedOption("isbn");
    } else {
      setSelectedOption("title");
    }
  };

  // 검색
  const onSearch = async () => {
    if (selectedOption === "isbn") {
      navigate(`/bookinfo/${searchValue}`);
    } else navigate(`/booklist/${searchValue}`);
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
            <option value="isbn">ISBN</option>
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
            if (e.key === "Enter") onSearch();
          }}
        />
        <S.SearchButton
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            onSearch();
          }}
        >
          <S.SearchIcon icon={faSearch} />
        </S.SearchButton>
      </S.SearchContainer>
    </S.Container>
  );
};
