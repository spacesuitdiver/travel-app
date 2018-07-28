import React, { Component } from "react";
import"./About.css";

class About extends Component {
    render() {
        return (

            <section id="services">
                <div class="container">
                    <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading">How it Works</h2>
                        <hr class="my-4"></hr>
                    </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="service-box mt-5 mx-auto">
                        <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
                        <h3 class="mb-3">Destination</h3>
                        <p class="text-muted mb-0">Our templates are updated regularly so they don't break.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="service-box mt-5 mx-auto">
                        <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                        <h3 class="mb-3">Pick Your Dates</h3>
                        <p class="text-muted mb-0">You can use this theme as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="service-box mt-5 mx-auto">
                        <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                        <h3 class="mb-3">Whats the Weather?</h3>
                        <p class="text-muted mb-0">We update dependencies to keep things fresh.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="service-box mt-5 mx-auto">
                        <i class="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
                        <h3 class="mb-3">Here is Your Outfit!</h3>
                        <p class="text-muted mb-0">You have to make your websites with love these days!</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Navbar;