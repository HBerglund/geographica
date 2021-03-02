import React, { Component } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import AppTitle from "./AppTitle";
import SearchBar from "./SearchBar";

interface Props {
  onSearchValueChange: (searchValue: string) => void;
}

class SearchView extends Component<Props> {
  onSearchValueChange = (searchValue: string) => {
    this.props.onSearchValueChange(searchValue);
  };

  render() {
    return (
      <div style={rootStyle}>
        <AppTitle />
        <SearchBar onSearchValueChange={this.onSearchValueChange} />
      </div>
    );
  }
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
};

export default SearchView;
