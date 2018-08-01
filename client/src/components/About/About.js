import React, { Component } from "react";
import"./About.css";

class About extends Component {
    render() {
        return (
            <section class="bg-primary" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 mx-auto text-center">
                        <h1 class="section-heading text-white">We've got what you need!</h1>
                        <hr class="light my-4"></hr>
                        <br />
                        <p class="text-faded mb-4">Going somewhere exciting? Not sure what to wear? We will help you pick out the perfect outfit sccording to your destination.</p>
                        <br />
                        <br />
    
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default About;