import styled from "styled-components";

export const Button = styled.div`
  cursor: pointer;
  background-color: green;
  padding: 10px 20px;
  color: white;
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
  font-size: 2rem;
  font-weight: 800;
  margin: 0 40px;
`;
