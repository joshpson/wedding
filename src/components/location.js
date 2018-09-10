import React from "react";
import Spinner from "react-spinkit";
import "./location.css";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  };

  render() {
    return (
      <div className="location-container container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1>Location</h1>
            <p className="location-description">
              The ceremony and reception will both be held at St. Francis Hall.
              1340 Quincy St NE, Washington, DC 20017.<br />
              <br />
              The hall is a 25 minute Uber/Lyft from DCA, and a 0.6 mile walk
              from the red-line Brookland metro stop.
            </p>
          </div>
          <div className="col-12 col-md-6 location-map">
            {this.state.loading ? (
              <Spinner
                className="loading-map text-center"
                name="three-bounce"
                color="white"
                fadeIn="none"
              />
            ) : null}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24829.407903039068!2d-77.00969130793976!3d38.93138269269742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1bfb320ff4f61bc3!2sSt+Francis+Hall!5e0!3m2!1sen!2sus!4v1536594822845"
              width="100%"
              height="350px"
              frameborder="0"
              onLoad={this.hideSpinner}
              allowfullscreen
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Location;
