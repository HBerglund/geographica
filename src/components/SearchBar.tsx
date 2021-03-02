import React, { ChangeEvent, KeyboardEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface Props {
  onSearchValueChange: (searchValue: string) => void;
  showResult: boolean;
}

function SearchBar(props: Props) {
  let searchValue: string = "";

  const rootStyle: CSSProperties = {
    minWidth: "30rem",
    position: "fixed",
    top: props.showResult ? "1%" : "48%",
    transform: props.showResult ? "translateY(-5%)" : "translateY(-48%)",
    zIndex: 50,
    transition: "all 1s ease",
  };

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
        label="Search for any country"
        margin="normal"
        variant="outlined"
        onChange={handleInputChange}
        onKeyPress={handleEnterEvent}
      ></TextField>
    </>
  );
}

export default SearchBar;
