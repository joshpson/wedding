import React from "react";
import "./lodging.css";

class Lodging extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="lodging-container container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>Lodging</h1>
            <p className="location-description">
              We will reserve a block of rooms at a metro accessible hotel in the coming months.<br/><br/> Check back for details.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Lodging;
