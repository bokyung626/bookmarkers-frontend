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
  font-size: 1.4rem;
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

export const CardContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0 40px;
  gap: 10px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  border-radius: 10px;
  border: 2px solid green;
  box-sizing: border-box;
  overflow: hidden;
  gap: 10px;
  width: calc(100% / 5 - 8px);
  height: 300px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
    transform: scale(1.02);
  }

  //1056
  @media ${({ theme }) => theme.device.laptop} {
    width: calc(100% / 4 - 8px);
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100% / 3 - 9px);
  }

  //767
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
`;
