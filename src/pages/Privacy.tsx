import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";
import Navbar from "../navigation/Navbar";

function Privacy() {
  return (
    <div style={rootStyle}>
      <h2>Privacy</h2>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
};

export default Privacy;
