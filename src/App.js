import React, { Component } from "react";
import { Landing } from "./views";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Landing />
      </div>
    );
  }
}

export default App;
