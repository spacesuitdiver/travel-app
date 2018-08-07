// Resuable Navbar

import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  handleSmoothScrollContact = (event) => {
    event.preventDefault ()
   var element = document.getElementById("contact");
   element.scrollIntoView({behavior: "smooth"});
  }

  handleSmoothScrollServices = (event) => {
    event.preventDefault ()
   var element = document.getElementById("services");
   element.scrollIntoView({behavior: "smooth"});
  }

  handleSmoothScrollAbout = (event) => {
    event.preventDefault ()
   var element = document.getElementById("about");
   element.scrollIntoView({behavior: "smooth"});
  }


  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          {/* <a class="navbar-brand js-scroll-trigger" href="#page-top">Get Started </a> */}
          <a class="navbar-brand js-scroll-trigger" href="#page-top" target="blank"> <img class="smtNav" src="/images/SMT1.png" alt="SMT"/></a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about" onClick={this.handleSmoothScrollAbout}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services" onClick={this.handleSmoothScrollServices}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact" onClick={this.handleSmoothScrollContact}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    );
  }
}

export default Navbar;