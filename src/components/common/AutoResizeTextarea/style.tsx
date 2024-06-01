import styled from "styled-components";

export const Textarea = styled.textarea`
  border-radius: 10px;
  width: 100%;
  border: 2px solid gray;
  resize: none;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  line-height: 1.5;

  &:focus {
    outline: none;
  }
`;
