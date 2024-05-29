import styled from "styled-components";

export const TotalMsg = styled.p`
  font-weight: 500;
  padding: 0 40px;
  margin: 15px 0;
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

export const BookImage = styled.div`
  position: relative;
  border-radius: 10px;
  display: flex;
  width: 10vw;
  height: 0;
  padding-bottom: 13%;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const BookListItem = styled.li`
  display: flex;
  gap: 20px;
  cursor: pointer;
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
