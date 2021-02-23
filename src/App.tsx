import React from "react";
import BrowserRouter from "./navigation/Router";
import { AppTheme } from "./Theme";

function App() {
  return (
    <>
      <AppTheme>
        <BrowserRouter />
      </AppTheme>
    </>
  );
}

export default App;
