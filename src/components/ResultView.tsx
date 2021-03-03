import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { useEffect, useState } from "react";

interface Props {
  searchValue: string;
}

function ResultView(props: Props) {
  const [country, setCountry] = useState({
    name: "",
  });

  useEffect(() => {
    async function fetchCountries(searchValue: string) {
      const restCountriesAPI = `https://restcountries.eu/rest/v2/name/${searchValue}`;
      const response = await fetch(restCountriesAPI);
      const result = await response.json();
      setCountry((prevCountry) => {
        const newCountry = {
          ...prevCountry,
          name: result[0].name,
        };
        return newCountry;
      });

      return result;
    }
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
      <h1 style={{ ...titleStyle }}>{country.name}</h1>
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
