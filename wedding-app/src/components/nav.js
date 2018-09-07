import React from "react";
import "./nav.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = e => {
    e.preventDefault();
    this.props.setPage(e.target.name);
  };

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
                  <a
                    className="nav-link"
                    href="/home"
                    name="home"
                    onClick={this.handleClick}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/registry"
                    name="registry"
                    onClick={this.handleClick}
                  >
                    Registry
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/location"
                    name="location"
                    onClick={this.handleClick}
                  >
                    Location
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/lodging"
                    name="lodging"
                    onClick={this.handleClick}
                  >
                    Lodging
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/rsvp"
                    name="rsvp"
                    onClick={this.handleClick}
                  >
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
