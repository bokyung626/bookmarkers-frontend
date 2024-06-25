import styled from "styled-components";

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

  overflow: hidden;

  .post-content {
    height: 42px;
  }

  .post-day {
    font-size: 0.8rem;
    color: gray;
  }
`;

export const CardContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  padding: 0 40px;
  gap: 10px;
  box-sizing: border-box;
`;

export const CardLayout = styled.div`
  border-radius: 10px;
  border: 2px solid green;
  box-sizing: border-box;
  overflow: hidden;
  gap: 10px;
  width: calc(100% / 5 - 8px);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
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

export const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const UserBox = styled.div`
  display: flex;
  gap: 10px;
  border-top: 1px solid gray;
  padding-top: 5px;
  align-items: center;

  .nickname {
    font-size: 0.9rem;
    color: #585858;
  }
`;
