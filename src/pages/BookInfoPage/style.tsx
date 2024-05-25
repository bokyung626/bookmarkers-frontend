import styled from "styled-components";

export const BookInfoContainer = styled.div`
  display: flex;
  padding: 30px;
  border: 3px solid green;
  border-radius: 10px;
  margin: 40px;
  gap: 30px;
`;

export const BookImage = styled.img`
  width: 20%;
`;

export const BookDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BookTitle = styled.div`
  font-size: 2rem;
  font-weight: 500;
  border-bottom: 2px solid green;
`;

export const BookAuthor = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const BookDescription = styled.div`
  font-size: 1rem;
  font-weight: 500;
  max-height: 150px;
  overflow: scroll;
`;
