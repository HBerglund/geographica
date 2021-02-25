import React, { useState } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import ReactMapGL from "react-map-gl";
import SearchView from "./SearchView";
import { light } from "@material-ui/core/styles/createPalette";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
  lat: number;
  long: number;
}

function Map() {
  const token =
    "pk.eyJ1IjoiaGJlcmdsdW5kIiwiYSI6ImNrbGlrNHNsNjIwZWMyem1nM3UxeXQyb3oifQ.zsesf-3iJHNpG_Nq_WMi9A";
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const darkStyle = "mapbox://styles/hberglund/cklkvbhbg1u7e17qokmikay98";
  const lightStyle = "mapbox://styles/hberglund/cklkxtfro0da417ppvlgei9uk";

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 1.5,
    latitude: 0,
    longitude: 0,
  });

  const goToNYC = () => {
    setViewport({
      ...viewport,
      longitude: -74.1,
      latitude: 40.7,
      zoom: 14,
    });
  };
  return (
    <>
      <div>
        <SearchView goTo={goToNYC} />
      </div>
      <div style={mapStyle}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={token}
          mapStyle={prefersDarkMode ? darkStyle : lightStyle}
          onViewportChange={setViewport}
        ></ReactMapGL>
      </div>
    </>
  );
}

const mapStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: -100,
};

export default Map;
