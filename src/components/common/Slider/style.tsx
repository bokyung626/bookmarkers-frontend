import styled from "styled-components";

export const SliderContainer = styled.div`
  padding: 0 40px;
  height: 300px;
`;

export const SliderBox = styled.div`
  float: left;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  border: 2px solid green;
  border-radius: 10px;
  /* overflow: hidden; */
  color: white;
  box-sizing: border-box;
`;

export const SliderContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  border: 1px solid white;
  box-sizing: border-box;
`;

export const SliderButton = styled.button``;

export const SliderButtonBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
