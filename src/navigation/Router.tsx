import React from "react";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Home from "../pages/Home";
import Map from "../pages/Map";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Privacy from "../pages/Privacy";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/map' component={Map} />
        <Route path='/about' component={About} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
