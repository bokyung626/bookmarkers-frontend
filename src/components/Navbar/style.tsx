import styled from "styled-components";
import { Link } from "react-router-dom";

export const Menu = styled.div`
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  /* border-bottom: solid 1px #e8e8e8; */
  overflow: auto;
  box-shadow: 0 0 20px #c2c2c2;
  background-color: #98ddca;
  display: flex;
  align-items: center;
  font-family: "NanumSquareRound";

  .openMenu {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: height 0.5s;
    animation: 0.5s ease-in-out loadEffect1;
  }
`;

export const StyledLink = styled(Link)`
  padding: 5px 20px;
  font-size: 16px;
  color: white;
  background-color: #98ddca;
  border: 3px solid white; /* 테두리 추가 */
  border-radius: 5px; /* 둥근 모서리 */
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, black 0.3s; /* 부드러운 전환 효과 */
`;

export const RightMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const LeftMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const LogoText = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

export const StyledLogoutButton = styled.button`
  padding: 5px 20px;
  font-size: 16px;
  color: white;
  background-color: #98ddca;
  border: 3px solid white; /* 테두리 추가 */
  border-radius: 5px; /* 둥근 모서리 */
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s, black 0.3s; /* 부드러운 전환 효과 */
`;
