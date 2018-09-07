import React, { Component } from "react";
import Hero from "./components/hero";
import Nav from "./components/nav";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container-fluid wrapper">
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default App;
