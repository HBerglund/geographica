import { CSSProperties } from "react";
import herman from "../assets/Herman.jpg";
import victor from "../assets/Victor.jpg";
import oscar from "../assets/Oscar.jpg";
import AppTitle from "../components/AppTitle";

function About() {
  return (
    <div style={rootStyle}>
      <AppTitle />
      <div style={imgWrapper}>
        <span>Page in progress...</span>{" "}
      </div>
    </div>
  );
}

export default About;

const rootStyle: CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: "3rem",
  height: "100%",
};

const imgWrapper: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};

const imgStyle: CSSProperties = {
  width: "15rem",
  height: "20rem",
  objectFit: "cover",
};
