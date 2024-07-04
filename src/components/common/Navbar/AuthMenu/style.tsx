import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  height: 20px;
  background-color: #eeeeee;
`;

export const MenuBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const Menu = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  color: black;
`;

export const Br = styled.div`
  width: 1px;
  height: 1rem;
  background-color: black;
`;

export const LogoutButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: black;
  cursor: pointer;
  font-family: "GmarketSansMedium";
  background-color: #eeeeee;
`;
