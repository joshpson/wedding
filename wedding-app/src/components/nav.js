import React from "react";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row nav-header justify-content-center">
        <div className="col-12 col-md-6">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav navbar-center">
                <li className="nav-item">
                  <a className="nav-link" href="/home" name="home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/registry" name="registry">
                    Registry
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/location" name="details">
                    Location
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#=/lodging" name="lodging">
                    Lodging
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/rsvp" name="rsvp">
                    RSVP
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
