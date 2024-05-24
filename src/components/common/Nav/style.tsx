import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3eb489; /* 민트색 배경 */
  padding: 1rem 2rem;
  z-index: 999; /* 다른 콘텐츠 위에 Navbar가 나타나도록 함 */
`;

export const Logo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Links = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const LinkItem = styled.li`
  margin-left: 1.5rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #d4f1f4; /* 호버 시 밝은 민트색 */
  }
`;
