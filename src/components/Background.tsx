import React, { CSSProperties } from "react";

function Background() {
  return <div style={rootStyle}></div>;
}

const rootStyle: CSSProperties = {
  height: "100%",
  width: "100%",
  objectFit: "cover",
  backgroundColor: "lightgray",
  position: "fixed",
  top: "0",
  zIndex: -100,
};

export default Background;
