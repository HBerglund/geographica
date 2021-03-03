import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { useEffect, useState } from "react";
import CountryInfo from "./CountryInfo";

interface Props {
  searchValue: string;
}

function ResultView(props: Props) {
  const [country, setCountry] = useState({
    name: "",
    population: 0,
    capital: "",
    language: "",
    currency: "",
    flagUrl: "",
  });

  useEffect(() => {
    async function fetchCountries(searchValue: string) {
      const restCountriesAPI = `https://restcountries.eu/rest/v2/name/${searchValue}`;
      const response = await fetch(restCountriesAPI);
      const result = await response.json();
      console.log(result);
      setCountry((prevCountry) => {
        const country = result[0];
        const newCountry = {
          ...prevCountry,
          name: country.name,
          population: country.population,
          capital: country.capital,
          language: country.languages[0].name,
          currency: country.currencies[0].name,
          flagUrl: country.flag,
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
      <CountryInfo
        name={country.name}
        population={country.population}
        capital={country.capital}
        language={country.language}
        currency={country.currency}
        flagUrl={country.flagUrl}
      />
    </div>
  );
}

const rootStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "relative",
};

export default ResultView;
