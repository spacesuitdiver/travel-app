import React from "react";
import"./HowWorks.css";

const HowWorks = () => (

<section id="services">
<div class="container">
  <div class="row">
    <div class="col-lg-12 text-center">
      <h2 class="section-heading">How it Works</h2>
      <hr class="my-4" />
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-lg-3 col-md-6 text-center">
      <div class="service-box mt-5 mx-auto">
        {/* <i class="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i> */}
       
        <h3 class="mb-3">Destination</h3>
        <p class="text-muted mb-0">Where are you going?</p>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 text-center">
      <div class="service-box mt-5 mx-auto">
        {/* <i class="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i> */}
        <h3 class="mb-3">Dates</h3>
        <p class="text-muted mb-0">Let us know when your next trip is!</p>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 text-center">
      <div class="service-box mt-5 mx-auto">
        {/* <i class="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i> */}
        <h3 class="mb-3">What's the Weather?</h3>
        <p class="text-muted mb-0">We will take your date range to find out the weather in your destination!</p>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 text-center">
      <div class="service-box mt-5 mx-auto">
        {/* <i class="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i> */}
        <h3 class="mb-3">Here's Your Outfit!</h3>
        <p class="text-muted mb-0">We will give you some inspiration to help you pack for you trip!</p>
      </div>
    </div>
  </div>
</div>
</section>
        );

export default HowWorks;