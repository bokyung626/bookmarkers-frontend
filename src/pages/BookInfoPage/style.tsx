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
  display: inline-flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
`;
export const Card = styled.div`
  border-radius: 10px;
  border: 1px solid black;
  box-sizing: border-box;
  overflow: hidden;
  margin: 10px;
  gap: 10px;
  width: calc(100% / 5 - 20px);
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
    transform: scale(1.02);
  }

  //1056
  @media ${({ theme }) => theme.device.laptop} {
    width: calc(100% / 4 - 20px);
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100% / 2 - 20px);
  }

  //767
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
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
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  gap: 10px;
  border-bottom: 1px solid gray;
`;
