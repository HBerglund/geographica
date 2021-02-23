import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

function Footer() {
  return (
    <BottomNavigation style={rootStyle} showLabels>
      <BottomNavigationAction label="About" />
      <BottomNavigationAction label="Contact" />
      <BottomNavigationAction label="Privacy" />
    </BottomNavigation>
  );
}

const rootStyle: CSSProperties = {
  position: "fixed",
  bottom: "0",
  width: "30rem",
  margin: "1rem",
  backgroundColor: "transparent",
  color: "black",
};

export default Footer;
