import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { useEffect, useState } from "react";
import { formatDiagnosticsWithColorAndContext } from "typescript";

interface Props {
  searchValue: string;
}

async function fetchCountries(searchValue: string) {
  const restCountriesAPI = `https://restcountries.eu/rest/v2/name/${searchValue}`;
  const response = await fetch(restCountriesAPI);
  const result = await response.json();
  console.log(result);
}

function ResultView(props: Props) {
  useEffect(() => {
    fetchCountries(props.searchValue);
  }, [props.searchValue]);

  const [contentVisible, setContentVisible] = useState(false);

  const rootStyle: CSSProperties = {
    position: "relative",
    height: "100%",
    width: "100%",
    opacity: contentVisible ? 1 : 0,
    transition: "opacity 1.5s ease",
    transitionDelay: "500ms",
  };

  useEffect(() => {
    const animation = setTimeout(() => {
      setContentVisible(false);
    }, 500);
    setContentVisible(true);
    clearTimeout(animation);
  });

  return (
    <div style={rootStyle}>
      <h1 style={{ ...titleStyle }}>{props.searchValue}</h1>
    </div>
  );
}

const wikiContainer: CSSProperties = {
  width: "50%",
  height: "90%",
  border: "1px solid white",
  borderRadius: "3px",
};

const titleStyle: CSSProperties = {
  position: "absolute",
  left: "3%",
  top: "20%",
  fontSize: "4vw",
};

export default ResultView;
