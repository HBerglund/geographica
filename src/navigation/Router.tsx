import React from "react";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import SearchView from "../pages/SearchView";
import Map from "../pages/Map";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";
import Navbar from "./Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Map} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Navbar />
    </BrowserRouter>
  );
}

export default Router;
