import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";
import Navbar from "../navigation/Navbar";

function About() {
  return (
    <div style={rootStyle}>
      <h2>About</h2>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
};

export default About;
