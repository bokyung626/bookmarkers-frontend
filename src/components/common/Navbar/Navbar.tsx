import React from "react";
import { RightMenu } from "./RightMenu";
import { LeftMenu } from "./LeftMenu";
import { NavbarContainer } from "./style";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <LeftMenu />
      <RightMenu />
    </NavbarContainer>
  );
};
