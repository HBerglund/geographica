import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Navbar from "./Navbar";
import ErrorBoundary from "../components/ErrorBoundary";

function Router() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Navbar />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default Router;
