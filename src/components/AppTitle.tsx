import React from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

function AppTitle() {
  return <h1 style={titleStyle}>Geographica</h1>;
}

const titleStyle: CSSProperties = {
  position: "fixed",
  top: "3%",
  left: "3%",
};

export default AppTitle;
