import React, { Component } from "react";
import "./Header.css";
//import Navbar from "../Navbar/Navbar";

class Header extends Component {
    render() {
        return (
                <header className="masthead text-center text-white d-flex">
                    <div className="container my-auto">
                        <div className="row">      
                            <div className="col-lg-10 mx-auto">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                                <h1 className="text-uppercase">
                                    <strong>The Best Way to Travel is in Style</strong>
                                </h1>
                            </div>
                            <div className="col-lg-8 mx-auto">
                               <p className="text-faded mb-5">Going somewhere exciting? Not sure what to wear? We will help you pick out the perfect outfit for where ever you are going.</p>
                                <br />
                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="/about"> Get Styled</a>
                            </div>
                        </div>
                    </div>
                </header>

        );
    }
}

export default Header;
