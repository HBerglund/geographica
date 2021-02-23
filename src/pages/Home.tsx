import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";
import AppTitle from "../components/AppTitle";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

function Home() {
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

export default Home;
