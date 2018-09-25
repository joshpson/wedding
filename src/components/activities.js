import React from "react";
import "./activities.css";

class Activities extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="activities-container container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>Explore DC</h1>
            <p className="location-description">
              We love DC, and we know you will too!<br />
              <br /> Closer to the wedding date we'll post some of our favorite
              museums, activities, and restaurants for you to explore during
              your weekend in DC.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Activities;
