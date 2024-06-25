import styled from "styled-components";

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 40px 0px 40px;
  padding: 20px;
  box-sizing: border-box;

  border: 2px solid green;
  border-radius: 10px;
`;

export const ReviewInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 0;
`;

export const ReviewImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;

  img {
    max-width: 500px;
  }
`;

export const ReviewHeader = styled.div`
  width: 100%;
`;

export const ReviewTitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 800;
`;

export const BookInfoContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px 0;
  border-top: 1px solid green;
  border-bottom: 1px solid green;
  color: #494949;
  font-size: 0.9rem;
  cursor: pointer;
`;

export const BookImage = styled.div`
  width: 70px;
  display: flex;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const BookInfoWarraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ReviewMemory = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-family: "GangwonEdu_OTFBoldA";
  padding: 20px 0;

  @font-face {
    font-family: "GangwonEdu_OTFBoldA";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export const ReviewContent = styled.div`
  width: 100%;
  font-family: "RIDIBatang";
  white-space: pre-wrap;

  @font-face {
    font-family: "RIDIBatang";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;

export const ReviewActionContainer = styled.div`
  padding: 10px 40px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
