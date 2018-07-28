import React, { Component } from "react";
import"./Header.css";

class Header extends Component {
    render() {
        return (

            <header className="masthead text-center text-white d-flex">
                <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                    <h1 className="text-uppercase">
                        <strong>The Best Way to Travel is in Style</strong>
                    </h1>
                    <hr></hr>
                    </div>
                    <div className="col-lg-8 mx-auto">
                    <p className="text-faded mb-5">Going somewhere exciting? Not sure what to wear? We will help you pick out the perfect outfit for where ever you are going.</p>
                    <a className="btn btn-primary btn-xl js-scroll-trigger" href="/about">Get Styled</a>
                    </div>
                </div>
                </div>
            </header>
        
        );
    }
}

export default Header;
