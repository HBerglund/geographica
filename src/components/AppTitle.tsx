import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";

function AppTitle() {
  return <h1 style={titleStyle}>Geographica</h1>;
}

const titleStyle: CSSProperties = {
  position: "fixed",
  top: "25%",
  color: "black",
  fontSize: "4vw",
};

export default AppTitle;
