import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";

interface Props {
  name: string;
}

function CountryTitle(props: Props) {
  return (
    <div>
      <h2 style={{ ...titleStyle }}>{props.name}</h2>
    </div>
  );
}

const titleStyle: CSSProperties = {
  fontSize: "2rem",
};

export default CountryTitle;
