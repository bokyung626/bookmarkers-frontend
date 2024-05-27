import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  position: fixed;
  justify-content: space-between;
  z-index: 99;
  width: 100%;
  box-sizing: border-box;
  /* border-bottom: solid 1px #e8e8e8; */
  overflow: auto;
  display: flex;
  align-items: center;
  font-family: "NanumSquareRound";
  border-bottom: 3px solid green;
  padding: 10px 20px;
  background-color: white;

  @media ${(props) => props.theme.device.mobile} {
    height: 70px;
  }
  @media ${(props) => props.theme.device.tablet} {
    height: 80px;
  }
  @media ${(props) => props.theme.device.laptop} {
    height: 90px;
  }
  @media ${(props) => props.theme.device.desktop} {
    height: 100px;
  }
`;

export const LeftMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const RightMenuContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export const Logo = styled(Link)`
  color: green;
  font-size: 2.8rem;
  font-weight: 500;
  margin-right: 20px;
  font-family: "SOYOMapleBoldTTF", sans-serif;

  @font-face {
    font-family: "SOYOMapleBoldTTF";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/SOYOMapleBoldTTF.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }
`;

export const Br = styled.div`
  width: 1px;
  height: 1rem;
  background-color: black;
`;

export const LinkMenu = styled(Link)`
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 0 10px;
  transition: color 0.2s;

  &:hover {
    color: green;
  }
`;

export const AuthMenu = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  color: black;
`;

export const LogoutButton = styled.button`
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;
  color: black;
  border-color: none;
  border: none;
  background-color: white;
  cursor: pointer;
`;
