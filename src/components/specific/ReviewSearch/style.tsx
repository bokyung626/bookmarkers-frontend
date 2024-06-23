import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  padding: 30px 40px;
  background-color: white;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid #4caf50; /* 녹색 테두리 */
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
`;

export const SelectContainer = styled.div`
  padding: 5px;
  border-right: 2px solid #4caf50; /* 녹색 테두리 */
  background-color: white; /* 배경색 */
`;

export const Select = styled.select`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  background-color: #4caf50; /* 녹색 배경색 */
  color: white;
  border: none;
  padding: 10px 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049; /* 녹색 약간 어두운 배경색 */
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;
