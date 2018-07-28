import React, { Component } from "react";
import"./About.css";

class About extends Component {
    render() {
        return (
            <section class="bg-primary" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center">
                        <h2 class="section-heading text-white">We've got what you need!</h2>
                        <hr class="light my-4"></hr>
                        <p class="text-faded mb-4" id="subheader">Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</p>
                        <a class="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;