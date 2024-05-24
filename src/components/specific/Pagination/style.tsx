import styled from "styled-components";

interface PageButtonProps {
  active: boolean;
}

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const PrevButton = styled.button`
  padding: 5px;
  background-color: white;
  border: none;
  border-right: 2px solid green;
  font-size: 1rem;
`;

export const PageButton = styled.button<PageButtonProps>`
  padding: 5px 10px;
  background-color: white;
  border: none;
  /* border-left: 2px solid green; */
  font-size: 1rem;
  text-align: center;
  border-right: 2px solid green;

  ${(props) =>
    props.active &&
    `background-color: green; 
    color: white;
  `}
`;

export const NextButton = styled.button`
  padding: 5px;
  background-color: white;
  border: none;
  font-size: 1rem;
`;
