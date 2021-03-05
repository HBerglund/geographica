import React, { useState, CSSProperties } from "react";
import ViewContainer from "../components/ViewContainer";
import Map from "../components/Map";
import AppTitle from "../components/AppTitle";
import SearchBar from "../components/SearchBar";

function Home() {
  const [showResult, setShowResult] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleTitleClick = () => {
    setSearchValue("0");
    setShowResult(false);
  };

  const handleSearchValueChange = (searchValue: string) => {
    setSearchValue(searchValue);
    setShowResult(true);
  };

  return (
    <div style={rootStyle}>
      <AppTitle onTitleClick={handleTitleClick} />
      <SearchBar
        onSearchValueChange={handleSearchValueChange}
        showResult={showResult}
      />
      <Map searchValue={searchValue} />
      <ViewContainer showResult={showResult} searchValue={searchValue} />
    </div>
  );
}

const rootStyle: CSSProperties = {
  height: "100%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default Home;
