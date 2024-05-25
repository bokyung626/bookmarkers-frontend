import styled from "styled-components";

export const BookListPageConatiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 0 50px 0;
  width: 100vw;
`;

export const TotalMsg = styled.p`
  font-weight: 500;
  padding: 0 40px;
`;

export const BookList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 10px;
  padding: 0 40px;
  box-sizing: border-box;
  gap: 20px;
`;

export const BookListItem = styled.li`
  display: flex;
  gap: 20px;

  .image {
    width: 100px;
    height: auto;
    border-radius: 10px;
  }
`;

export const BookImg = styled.div`
  display: flex;
  width: 100px;
  height: 150px;
  background-color: black;
`;

export const BookDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .desc {
    color: gray;
    margin-top: 10px;
  }
`;

export const BookTitle = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
`;
