import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <div style={rootStyle}>
      <h2>About</h2>
      <Footer />
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
};

export default About;
