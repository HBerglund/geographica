import React from "react";
import TextField from "@material-ui/core/TextField";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface Props {
  triggerSearch: (inputValue: string) => void;
}

function SearchBar(props: Props) {
  let inputValue: string = "";

  const triggerSearch = () => {
    props.triggerSearch(inputValue);
  };

  return (
    <>
      <TextField
        style={rootStyle}
        label="Search for a city"
        margin="normal"
        variant="outlined"
        onChange={(e) => {
          inputValue = String(e.target.value);
        }}
      />
      <button onClick={triggerSearch}>New York</button>
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
