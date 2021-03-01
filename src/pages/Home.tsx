import React, { useState } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import ReactMapGL from "react-map-gl";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ViewContainer from "../components/ViewContainer";

function Home() {
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

  const [showSearch, setShowSearch] = useState(true);

  async function triggerSearch(input: string) {
    setShowSearch(false);
    const coordinates = await getCoordinates(input);
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
    console.log(showSearch);
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

  const getMapStyle = (): CSSProperties => {
    return {
      width: "100%",
      height: "100%",
      position: "fixed",
      zIndex: -100,
      opacity: showSearch ? 0.5 : 1,
    };
  };

  return (
    <div>
      <div style={{ height: "100%" }}>
        <ViewContainer triggerSearch={triggerSearch} showSearch={showSearch} />
      </div>
      <div style={getMapStyle()}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={token}
          mapStyle={prefersDarkMode ? darkStyle : lightStyle}
          onViewportChange={setViewport}
        ></ReactMapGL>
      </div>
    </div>
  );
}

export default Home;
