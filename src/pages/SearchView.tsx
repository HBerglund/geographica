import React, { Component } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import AppTitle from "../components/AppTitle";
import SearchBar from "../components/SearchBar";

interface Props {
  goTo: () => void;
}

class SearchView extends Component<Props> {
  render() {
    const APIKey = "AIzaSyDx_oW4Wfsb2g3pE5n7w094wfGwHcLh2l0";

    async function fetchGoogle() {
      const dataPath = "https://maps.googleapis.com/maps/api/geocode/json?";
      const response = await fetch(dataPath);
      const result = await response.json();
      console.log(result);
    }

    fetchGoogle();

    return (
      <div style={rootStyle}>
        <AppTitle />
        <SearchBar goTo={this.props.goTo} />
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
