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
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <a id="navbar-brand" className="navbar-brand js-scroll-trigger" href="/page-top">Get Started </a>
           

              <a className="nav-link js-scroll-trigger" href="/about" onClick={this.handleSmoothScrollAbout}>About</a>


              <a className="nav-link js-scroll-trigger" href="/services" onClick={this.handleSmoothScrollServices}>Services</a>


              <a className="nav-link js-scroll-trigger" href="/contact" onClick={this.handleSmoothScrollContact} > Contact</a>

            </div>
        </div>
      </nav>

    );
  }
}

export default Navbar;