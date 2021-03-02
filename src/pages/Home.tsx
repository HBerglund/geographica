import React, { useState } from "react";
import ViewContainer from "../components/ViewContainer";
import Map from "../components/Map";

function Home() {
  const [showSearch, setShowSearch] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleSearchValueChange = (searchValue: string) => {
    setSearchInput(searchValue);
    setShowSearch(false);
  };

  return (
    <div>
      <ViewContainer
        onSearchValueChange={handleSearchValueChange}
        showSearch={showSearch}
      />
      <Map searchValue={searchInput} />
    </div>
  );
}

export default Home;
