import React, { useState } from "react";
import ViewContainer from "../components/ViewContainer";
import Map from "../components/Map";

function Home() {
  const [showSearch, setShowSearch] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const setSearchValue = (searchValue: string) => {
    setSearchInput(searchValue);
  };

  return (
    <div>
      <ViewContainer setSearchValue={setSearchValue} showSearch={showSearch} />
      <Map searchValue={searchInput} />
    </div>
  );
}

export default Home;
