import React from "react";
/* import Background from "./components/Background"; */
import BrowserRouter from "./navigation/Router";
import { AppTheme } from "./Theme";

function App() {
  return (
    <>
      <AppTheme>
        <BrowserRouter />
      </AppTheme>
      {/* <Background /> */}
    </>
  );
}

export default App;
