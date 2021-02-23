import React from "react";
import TextField from "@material-ui/core/TextField";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

function SearchBar() {
  return (
    <TextField
      style={rootStyle}
      label="Search for a city"
      margin="normal"
      variant="outlined"
    />
  );
}

const rootStyle: CSSProperties = {
  minWidth: "30rem",
};

export default SearchBar;
