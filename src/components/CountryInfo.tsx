import { CSSProperties } from "@material-ui/core/styles/withStyles";
import numeral from "numeral";
import React from "react";
import CountryTitle from "./CountryTitle";

interface Props {
  name: string;
  population: number;
  capital: string;
  language: string;
  currency: string;
  flagUrl: string;
}

function CountryInfo(props: Props) {
  const formattedPop = numeral(props.population).format("0,0");

  return (
    <div style={rootStyle}>
      <img style={flagStyle} src={props.flagUrl} alt='flag' />
      <CountryTitle name={props.name} />
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

const rootStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  right: "3%",
  top: "20%",
  padding: "1rem",
  backgroundColor: "rgba(0,0,0,0.5)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "5px",
};

const labelStyle: CSSProperties = {
  fontSize: ".8rem",
  color: "#f4f4f4",
  textTransform: "uppercase",
  letterSpacing: "1px",
};

const flagStyle: CSSProperties = {
  width: "200px",
  height: "120px",
  marginBottom: "1rem",
};

export default CountryInfo;
