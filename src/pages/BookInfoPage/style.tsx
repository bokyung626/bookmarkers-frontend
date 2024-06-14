import styled from "styled-components";
import { GButton } from "../../assets/styles/style";

export const BookInfoContainer = styled.div`
  display: flex;
  padding: 40px;

  flex-direction: column;
  border: 3px solid green;
  border-radius: 10px;
  margin: 0 40px 10px 40px;
  gap: 10px;
`;

export const BooKInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const BookImage = styled.div`
  width: 20%;
  img {
    width: 100%;
  }
`;

export const BookDesc = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 1.5rem;
`;

export const BookInfoMenu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BookTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  border-bottom: 2px solid green;
`;

export const BookAuthor = styled.div`
  font-weight: 500;
`;

export const BookDescription = styled.div`
  font-weight: 300;
`;

export const ReadingNoteContainer = styled.div`
  display: flex;
  margin: 0 40px;
`;

export const CopyNoteContainer = styled.div`
  display: flex;
  margin: 0 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 40px;
  gap: 10px;
`;

export const WriteReadingNoteButton = styled(GButton)``;
