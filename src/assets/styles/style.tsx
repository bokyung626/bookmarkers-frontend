import styled from "styled-components";

export const GButton = styled.div`
  cursor: pointer;
  background-color: green;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
`;

export const WButton = styled.div`
  cursor: pointer;
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid green;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  width: 100vw;
  box-sizing: border-box;

  @media ${(props) => props.theme.device.mobile} {
    padding-top: 70px;
  }
  @media ${(props) => props.theme.device.tablet} {
    padding-top: 80px;
  }
  @media ${(props) => props.theme.device.laptop} {
    padding-top: 90px;
  }
  @media ${(props) => props.theme.device.desktop} {
    padding-top: 100px;
  }
`;

export const SectionTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 20px 40px;
  span {
    color: green;
    font-weight: 800;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  border: 2px solid green;
  padding: 10px;
`;

export const TextArea = styled.textarea`
  border-radius: 10px;
  border: 2px solid green;
  resize: none;
  height: 30vh;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;
