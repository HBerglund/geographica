import React, { useState } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import ReactMapGL from "react-map-gl";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
  searchValue: string;
}

function Map(props: Props) {
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

  async function updateMap(input: string) {
    const coordinates = await getCoordinates(props.searchValue);
    if (coordinates) {
      goToDestination(coordinates);
    }
  }

  async function getCoordinates(input: string) {
    const mapBoxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
    const mapBoxToken =
      "access_token=pk.eyJ1IjoiaGJlcmdsdW5kIiwiYSI6ImNrbGlrNHNsNjIwZWMyem1nM3UxeXQyb3oifQ.zsesf-3iJHNpG_Nq_WMi9A";
    const response = await fetch(mapBoxURL + input + ".json?" + mapBoxToken);
    const result = await response.json();

    if (result.features[0].place_name === input) {
      return {
        long: result.features[0].geometry.coordinates[0],
        lat: result.features[0].geometry.coordinates[1],
        name: result.features[0].place_name,
      };
    }
  }

  const goToDestination = (coordinates: any) => {
    // Fix typing later
    setViewport((prevViewport) => {
      return {
        ...prevViewport,
        latitude: coordinates.lat,
        longitude: coordinates.long,
        zoom: 3,
      };
    });
  };

  return (
    <div style={mapStyle}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle={prefersDarkMode ? darkStyle : lightStyle}
        onViewportChange={setViewport}
      ></ReactMapGL>
    </div>
  );
}

const mapStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: -100,
};

export default Map;
