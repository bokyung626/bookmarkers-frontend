import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  width: 100%;
  box-sizing: border-box;
`;

// RecommentBook
export const RecommentBookContainer = styled.div`
  border: 2px solid green;
  margin: 0px 40px;
  border-radius: 10px;
`;

export const BookList = styled.div`
  display: flex;
  overflow: scroll;
  justify-content: space-evenly;
  min-height: 300px;

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const BookItem = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 10px;
  cursor: pointer;

  img {
    width: 150px;
  }
`;
