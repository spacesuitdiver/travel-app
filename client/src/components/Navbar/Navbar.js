// Resuable Navbar

import React, { Component } from "react";
import"./Navbar.css";

class Navbar extends Component {
    render() {
        return (
          <body id="page-top">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <a id="navbar-brand" className="navbar-brand js-scroll-trigger" href="/page-top">Get Started </a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  
                    <a className="nav-link js-scroll-trigger" href="/about">About</a>
                  
                
                    <a className="nav-link js-scroll-trigger" href="/services">Services</a>
                  
                 
                    <a className="nav-link js-scroll-trigger" href="/portfolio">Portfolio</a>
                  
                  
                    <a className="nav-link js-scroll-trigger" href="/contact">Contact</a>
          
                </ul>
              </div>
            </div>
          </nav>
        </body>
        );
    }
}

export default Navbar;