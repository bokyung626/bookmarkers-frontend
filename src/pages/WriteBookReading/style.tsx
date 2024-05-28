import styled from "styled-components";
import { TextArea } from "../../assets/styles/style";

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

export const Content = styled(TextArea)`
  height: 50px;
`;
