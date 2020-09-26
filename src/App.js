import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Landing, PricingView } from "./views";
import { Navbar, NotFound, Contact } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/pricing">
            <PricingView />
          </Route>
          <Route component={NotFound}></Route>
        </Switch>
        <Contact />
      </div>
    );
  }
}

export default App;
