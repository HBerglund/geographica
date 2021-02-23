import React from "react";
import Footer from "../components/Footer";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

function Contact() {
  return (
    <div style={rootStyle}>
      <h2>Contact</h2>
      <Footer />
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
};

export default Contact;
