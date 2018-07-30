import React, { Component } from "react";
import"./HowWorks.css";

class HowWorks extends Component {
    render() {
        return (

<section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">How it Works</h2>
            {/* <hr class="my-4"> </hr> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Destination</h3>
              <p className="text-muted mb-0">Our templates are updated <br />regularly so they don't break.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Pick Your Dates</h3>
              <p className="text-muted mb-0">You can use this theme as is, <br /> or you can make changes!</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Whats the Weather?</h3>
              <p className="text-muted mb-0">We update dependencies <br /> to keep things fresh.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="service-box mt-5 mx-auto">
              <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
              <h3 className="mb-3">Here is Your Outfit!</h3>
              <p className="text-muted mb-0">You have to make your <br /> websites with love these days!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

        );
    }
}

export default HowWorks;