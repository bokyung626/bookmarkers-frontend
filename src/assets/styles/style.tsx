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
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 40px;
  min-height: 100vh;
  padding-top: 100px;

  /* @media ${(props) => props.theme.device.mobile} {
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
  } */
`;

export const SectionTitle = styled.div`
  margin: 40px 40px 10px 40px;
  display: flex;
  justify-content: space-between;
  align-items: certer;

  span {
    font-size: 1.4rem;
    font-weight: 500;
  }

  .more {
    color: gray;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
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
