import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";
import Footer from "../components/Footer";

function Privacy() {
  return (
    <div style={rootStyle}>
      <h2>Privacy</h2>
      <Footer />
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
};

export default Privacy;
