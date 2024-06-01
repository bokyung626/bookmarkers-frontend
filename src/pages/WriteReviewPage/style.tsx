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

export const AutoTextAreaMemory = styled.textarea`
  border-radius: 10px;
  border: 2px solid green;
  box-sizing: border-box;
  height: auto;
  line-height: 1;
  resize: none;
  padding: 10px;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;
