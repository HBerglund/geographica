import React from "react";
import Router from "./navigation/Router";
import { AppTheme } from "./Theme";

function App() {
  return (
    <AppTheme>
      <Router />
    </AppTheme>
  );
}

export default App;
