import styled from "styled-components";
import { GButton } from "../../assets/styles/style";

export const BookInfoContainer = styled.div`
  display: flex;
  padding: 40px;

  flex-direction: column;
  border: 3px solid green;
  border-radius: 10px;
  margin: 40px 40px 10px 40px;
  gap: 10px;
`;

// export const BookImage = styled.div`
//   position: relative;
//   border-radius: 5px;
//   display: flex;
//   width: 80%;
//   height: 0;
//   padding-bottom: 20%;
//   overflow: hidden;

//   img {
//     position: absolute;
//     top: 0;
//     left: 0;
//     display: block;
//     width: 100%;
//     height: 100%;
//   }
// `;

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

  overflow: scroll;
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
  gap: 5px;
  border-bottom: 1px solid gray;
  height: 110px;
  overflow: hidden;

  .post-content {
    height: 42px;
  }

  .post-day {
    font-size: 0.8rem;
    color: gray;
  }
`;
