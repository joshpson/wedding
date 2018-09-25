import React, { Component } from "react";
import Nav from "./components/nav";
import Home from "./components/home";
import Registry from "./components/registry";
import Location from "./components/location";
import Lodging from "./components/lodging";
import Rsvp from "./components/rsvp";
import Activities from "./components/activities";
import { Switch, Route, withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  setPage = page => {
    this.props.history.push(page);
  };

  render() {
    return (
      <div className="container-fluid wrapper">
        <Nav setPage={this.setPage} history={this.props.history} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <Home setPage={this.setPage} />;
            }}
          />
          <Route
            exact
            path="/registry"
            render={props => {
              return <Registry />;
            }}
          />
          <Route
            exact
            path="/location"
            render={props => {
              return <Location />;
            }}
          />
          <Route
            exact
            path="/lodging"
            render={props => {
              return <Lodging />;
            }}
          />
          <Route
            exact
            path="/rsvp"
            render={props => {
              return <Rsvp />;
            }}
          />
          <Route
            exact
            path="/activies"
            render={props => {
              return <Activities />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
