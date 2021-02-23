import React, { useState } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import ReactMapGL from "react-map-gl";

function About() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 1.5,
  });

  const token =
    "pk.eyJ1IjoiaGJlcmdsdW5kIiwiYSI6ImNrbGlrNHNsNjIwZWMyem1nM3UxeXQyb3oifQ.zsesf-3iJHNpG_Nq_WMi9A";
  const style = "mapbox://styles/hberglund/cklikyfrs01n217o8a3g4xzuk";
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={token}
      mapStyle={style}
      onViewportChange={(viewport: any) => {
        setViewport(viewport);
      }}
    ></ReactMapGL>
  );
}

export default About;
