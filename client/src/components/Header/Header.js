import React, { Component } from "react";
import"./Header.css";

class Header extends Component {
    render() {
        return (
            <header class="masthead text-center text-white d-flex">
                <div class="container my-auto">
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                    <h1 class="text-uppercase">
                        <strong>The Best Way to Travel is in Style</strong>
                    </h1>
                    <hr></hr>
                    </div>
                    <div class="col-lg-8 mx-auto">
                    <p class="text-faded mb-5">Going somewhere exciting? Not sure what to wear? We will help you pick out the perfect outfit for where ever you are going.</p>
                    <a class="btn btn-primary btn-xl js-scroll-trigger" href="/about">Get Styled</a>
                    </div>
                </div>
                </div>
            </header>
        );
    }
}

export default Header;
