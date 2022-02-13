import React from "react";
import { styled } from "@mui/system";
import { Button } from "@mui/material";
import { theme } from "../Styles";

const Navbar = () => {
  const MyThemeComponent = styled(Button)`
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  `;
  return <MyThemeComponent>Navbar</MyThemeComponent>;
};

export default Navbar;
