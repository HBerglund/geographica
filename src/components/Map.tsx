import React, { useState, useEffect } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import ReactMapGL, {
  FlyToInterpolator,
  WebMercatorViewport,
} from "react-map-gl";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
  searchValue: string;
}

const token =
  "pk.eyJ1IjoiaGJlcmdsdW5kIiwiYSI6ImNrbGlrNHNsNjIwZWMyem1nM3UxeXQyb3oifQ.zsesf-3iJHNpG_Nq_WMi9A";

async function getCoordinates(input: string) {
  const mapBoxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
  const mapBoxToken = "access_token=" + token;
  const response = await fetch(mapBoxURL + input + ".json?" + mapBoxToken);
  const result = await response.json();
  console.log(result);
  const feature = result.features.find((feature: any) => {
    return feature.place_type.includes("country");
  });

  if (!feature) {
    return;
  }
  if (
    feature.place_name.toLowerCase().includes(input.toLowerCase()) ||
    feature.matching_place_name.toLowerCase().includes(input.toLowerCase())
  ) {
    return {
      bbox: feature.bbox,
      long: feature.geometry.coordinates[0],
      lat: feature.geometry.coordinates[1],
    };
  }
}

function Map(props: Props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const darkStyle = "mapbox://styles/hberglund/cklkvbhbg1u7e17qokmikay98";
  const lightStyle = "mapbox://styles/hberglund/cklkxtfro0da417ppvlgei9uk";

  const [viewport, setViewport] = useState<{
    width: string | number;
    height: string | number;
    zoom: number;
    latitude: number;
    longitude: number;
  }>({
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

  useEffect(() => {
    if (props.searchValue) {
      updateMap(props.searchValue);
    }
  }, [props.searchValue]);

  const goToDestination = (coordinates: {
    bbox: [number, number, number, number];
  }) => {
    const bboxFromApi = coordinates.bbox;
    const bboxForFitApi: [[number, number], [number, number]] = [
      [bboxFromApi[0], bboxFromApi[1]],
      [bboxFromApi[2], bboxFromApi[3]],
    ];

    // Fix typing later
    setViewport((prevViewport) => {
      const newViewport = new WebMercatorViewport({
        //Helping typescript
        width: Number(prevViewport.width),
        height: Number(prevViewport.height),
      }).fitBounds(bboxForFitApi);
      return {
        ...newViewport,
        transitionDuration: 1000,
        transitionInterpolator: new FlyToInterpolator(),
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
