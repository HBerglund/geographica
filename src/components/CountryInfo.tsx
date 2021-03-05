import { CSSProperties } from "@material-ui/core/styles/withStyles";
import numeral from "numeral";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
  name: string;
  population: number;
  capital: string;
  language: string;
  currency: string;
  flagUrl: string;
}

function CountryInfo(props: Props) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const formattedPop = numeral(props.population).format("0,0");

  const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "3%",
    top: "20%",
    padding: "1rem",
    backgroundColor: prefersDarkMode
      ? "rgba(0,0,0,0.5)"
      : "rgba(255,255,255,0.5)",
    borderColor: prefersDarkMode ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "5px",
  };

  if (1) {
    return (null as any).abc;
  }

  return (
    <div style={rootStyle}>
      <img style={flagStyle} src={props.flagUrl} alt="flag" />
      <br />
      <h1>{props.name}</h1>
      <br />
      <span style={labelStyle}>Population</span>
      <h2>{formattedPop}</h2>
      <br />
      <span style={labelStyle}>Capital</span>
      <h2>{props.capital}</h2>
      <br />
      <span style={labelStyle}>Language</span>
      <h2>{props.language}</h2>
      <br />
      <span style={labelStyle}>Currency</span>
      <h2>{props.currency}</h2>
    </div>
  );
}

const labelStyle: CSSProperties = {
  fontSize: ".8rem",
  opacity: 0.8,
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const flagStyle: CSSProperties = {
  width: "200px",
  height: "120px",
  margin: "auto",
  objectFit: "cover",
};

export default CountryInfo;
