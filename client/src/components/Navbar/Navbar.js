// Resuable Navbar

import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <a id="navbar-brand" className="navbar-brand js-scroll-trigger" href="/page-top">Get Started </a>
           

              <a className="nav-link js-scroll-trigger" href="/about">About</a>


              <a className="nav-link js-scroll-trigger" href="/services">Services</a>


              <a className="nav-link js-scroll-trigger" href="/portfolio">Portfolio</a>


              <a className="nav-link js-scroll-trigger" href="/contact">Contact</a>

            
          </div>
        </div>
      </nav>

    );
  }
}

export default Navbar;