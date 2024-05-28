import styled from "styled-components";
import { GButton } from "../../assets/styles/style";

export const BookInfoContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  border: 3px solid green;
  border-radius: 10px;
  margin: 20px;
  gap: 10px;
`;

export const BookImage = styled.img`
  width: 20%;
  height: auto;
  display: block;
`;

export const BookInfoMenu = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BookDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BookTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  border-bottom: 2px solid green;
`;

export const BookAuthor = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const BookDescription = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  max-height: 150px;
  overflow: scroll;
`;

export const ReadingNoteContainer = styled.div`
  display: flex;
  margin: 0 40px;
`;

export const BooKInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const WriteReadingNoteButton = styled(GButton)`
  position: relative;
`;
export const CardContainer = styled.div`
  border: 1px solid black;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
`;
export const Card = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  width: calc(100vw / 5 - 40px);
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;
