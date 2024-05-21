import React from "react";
import { Menu } from "./style";
import { RightMenu } from "./RightMenu";
import { LeftMenu } from "./LeftMenu";

export const Navbar = () => {
  return (
    <Menu>
      <LeftMenu />
      <RightMenu />
    </Menu>
  );
};
