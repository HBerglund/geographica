import React, { Component } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import AppTitle from "./AppTitle";
import SearchBar from "./SearchBar";

interface Props {
  setSearchValue: (searchValue: string) => void;
}

class SearchView extends Component<Props> {
  setSearchValue = (searchValue: string) => {
    this.props.setSearchValue(searchValue);
  };

  render() {
    return (
      <div style={rootStyle}>
        <AppTitle />
        <SearchBar setSearchValue={this.setSearchValue} />
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
