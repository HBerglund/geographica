import React, { ChangeEvent, KeyboardEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

interface Props {
  onSearchValueChange: (searchValue: string) => void;
}

function SearchBar(props: Props) {
  let searchValue: string = "";

  const onSearchValueChange = () => {
    if (searchValue) {
      props.onSearchValueChange(searchValue);
    } else {
      alert("FIX THIS");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchValue = String(e.target.value);
  };

  const handleEnterEvent = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearchValueChange();
    }
  };

  return (
    <>
      <TextField
        style={rootStyle}
        label="Search for a city"
        margin="normal"
        variant="outlined"
        onChange={handleInputChange}
        onKeyPress={handleEnterEvent}
      ></TextField>
      <Button onClick={onSearchValueChange} style={btnStyle}>
        Search
      </Button>
    </>
  );
}

const rootStyle: CSSProperties = {
  minWidth: "30rem",
  position: "fixed",
  top: "48%",
  transform: "translateY(-48%)",
  zIndex: 50,
};

const btnStyle: CSSProperties = {
  position: "absolute",
  zIndex: 110,
  top: "55%",
};

export default SearchBar;
