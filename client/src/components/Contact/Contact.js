import React, { Component } from "react";
import"./Contact.css";
// import { Input, Select, Button } from 'semantic-ui-react'
// const InputExampleAction = () => <Input action='Email' placeholder='Email...' />
// export default InputExampleAction

const Contact = () => (

    <section id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center socialMediaCol">

            <h2 class="section-heading  animated shake">Let's Stay In Touch!</h2>
            <hr class="my-4" />
            <p class="mb-5 contactMe">FOLLOW US: </p>
            <a href="" target="blank"> <img class="social-media" src="/images/twitter.jpg" alt="twitter"/></a>
            <a href="" target="blank"> <img class="social-media" src="/images/insta.jpg" alt="instagram"/></a>
            <a href="" target="blank"> <img class="social-mediaF" src="/images/fb.jpg" alt="facebook"/></a>

          </div>
        </div>
      </div>

        <br/>
        <br/>

      <section id="email">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center emailBar">
              <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>

              <div class='ui action input'>
                <input type='email' placeholder='Email' />
                  <button type="submit" class='ui button' role='button'>
                  {/* <i aria-hidden='true' class='white envelope outline icon' />  */}
                  <i aria-hidden='true' class='white angle right large icon' id="arrow" /> 
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
    </section>
)
export default Contact;


   {/* <div class="col-lg-4 ml-auto text-center">
            <i class="fa fa-phone fa-3x mb-3 sr-contact"></i>
            <p class="phone">469-456-6789</p>
          </div> */}