import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";
import AppTitle from "./AppTitle";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

function Layout() {
  return (
    <div style={rootStyle}>
      <AppTitle />
      <SearchBar />
      <Footer />
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
};

export default Layout;
