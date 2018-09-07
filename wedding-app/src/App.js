import React, { Component } from "react";
import Nav from "./components/nav";
import Home from "./components/home";
import Registry from "./components/registry";
import Location from "./components/location";
import Lodging from "./components/lodging";
import Rsvp from "./components/rsvp";

import "./App.css";

const pages = {
  home: <Home />,
  registry: <Registry />,
  location: <Location />,
  lodging: <Lodging />,
  rsvp: <Rsvp />
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home"
    };
  }

  setPage = page => {
    this.setState({
      page: page
    });
  };

  render() {
    return (
      <div className="container-fluid wrapper">
        <Nav setPage={this.setPage} />
        {pages[this.state.page]}
      </div>
    );
  }
}

export default App;
