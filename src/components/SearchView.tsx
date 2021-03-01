import React, { Component } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import AppTitle from "./AppTitle";
import SearchBar from "./SearchBar";

interface Props {
  triggerSearch: (inputValue: string) => void;
}

class SearchView extends Component<Props> {
  triggerSearch = (input: string) => {
    this.props.triggerSearch(input);
  };

  render() {
    return (
      <div style={rootStyle}>
        <AppTitle />
        <SearchBar triggerSearch={this.triggerSearch} />
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
