import styled from "styled-components";

export const BookReadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  gap: 10px;
  margin-bottom: 20px;
`;

export const MemoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;

export const ThumnailBox = styled.div`
  display: flex;
  border-radius: 10px;
  border: 2px solid green;
  width: 150px;
  height: 150px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
