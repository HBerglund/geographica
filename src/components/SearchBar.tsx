import React from "react";
import TextField from "@material-ui/core/TextField";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface Props {
  goTo: () => void;
}

function SearchBar(props: Props) {
  return (
    <>
      <TextField
        style={rootStyle}
        label="Search for a city"
        margin="normal"
        variant="outlined"
      />
      <button onClick={props.goTo}>New York</button>
    </>
  );
}

const rootStyle: CSSProperties = {
  minWidth: "30rem",
  position: "fixed",
  top: "48%",
  transform: "translateY(-48%)",
};

export default SearchBar;
