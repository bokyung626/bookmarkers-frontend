import React from "react";
import { RightMenu } from "./RightMenu";
import { LeftMenu } from "./LeftMenu";
import { NavMenuBox, NavbarContainer } from "./style";
import { AuthMenu } from "./AuthMenu/AuthMenu";

export const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <AuthMenu />
      <NavMenuBox>
        <LeftMenu />
        <RightMenu />
      </NavMenuBox>
    </NavbarContainer>
  );
};
