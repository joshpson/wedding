import React from "react";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero">
        <h1>Kelly & Josh</h1>
        <h3>June, 15th 2019</h3>
        <div className="text-center">
          <button
            type="button"
            className="btn hero-button"
            onClick={() => this.props.setPage("/rsvp")}
          >
            RSVP
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
