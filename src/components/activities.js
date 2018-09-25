import React from "react";
import "./activies.css";

class Activies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="activies-container container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>Things To Do</h1>
            <p className="location-description">Details to come.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Activies;
