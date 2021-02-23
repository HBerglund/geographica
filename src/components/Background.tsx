import React, { CSSProperties } from "react";

function Background() {
  return (
    <div style={rootStyle}>
      {/* <img style={imgStyle} src="../../assets/map.jpg" alt="" /> */}
    </div>
  );
}

const rootStyle: CSSProperties = {
  height: "100%",
  width: "100%",
  backgroundColor: "lightgrey",
  objectFit: "cover",
  position: "fixed",
  top: "0",
  zIndex: -100,
};

// const imgStyle: CSSProperties = {
//   height: "100%",
//   width: "100%",
// };

export default Background;
