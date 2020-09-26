import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Landing } from "./views";
import { Navbar, NotFound } from "./components";
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
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
