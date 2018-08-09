import React from "react";
import"./Contact.css";

const Contact = () => (

    <section id="contact">
      <div className="container">
        <div className="row">
<<<<<<< HEAD
          <div className="col-lg-8 mx-auto text-center">

            <h2 className="section-heading animated shake">Let's Stay In Touch!</h2>
            <hr className="my-4" />
            <p className="mb-5 contactMe">FOLLOW US: </p>
            <a href="" target="blank"> <img class="social-media" src="/images/twitter.jpg" alt="twitter"/></a>
            <a href="" target="blank"> <img class="social-media" src="/images/insta.jpg" alt="instagram"/></a>
            <a href="" target="blank"> <img class="social-media" src="/images/fb.jpg" alt="instagram"/></a>
          </div>
        </div>
=======
          <div className="col-lg-8 mx-auto text-center socialMediaCol">

            <h2 className="section-heading  animated shake">Let's Stay In Touch!</h2>
            <hr className="my-4" />
            <p className="mb-5 contactMe">FOLLOW US: </p>
            <a href="" target="blank"> <img className="social-media" src="/images/twitter.jpg" alt="twitter"/></a>
            <a href="" target="blank"> <img className="social-media" src="/images/insta.jpg" alt="instagram"/></a>
            <a href="" target="blank"> <img className="social-mediaF" src="/images/fb.jpg" alt="facebook"/></a>

          </div>
        </div>
      </div>
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5

        <br/>
        <br/>

<<<<<<< HEAD

        <div className="row">
          <div className="col-lg-4 ml-auto text-center">
            <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
            <p className="phone">469-456-6789</p>
          </div>
          <div className="col-lg-4 mr-auto text-center">
            <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
            <p>
              <a href="mailto:your-email@your-domain.com">travel@stylemytravel.com</a>
            </p>
          </div>
        </div>
      </div>
=======
      <section id="email">
        <p class="emailText"> Sign up to receive news & updates!</p>
        <div class="container">
          <div class="row">   
            <div class="col-lg-8 mx-auto text-center emailBar">
              <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>

              <div class='ui action input'>
              

        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center emailBar">
              <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>

              <div className='ui action input'>

                <input type='email' placeholder='Email' />
                  <button type="submit" className='ui button'>
                  <i aria-hidden='true' className='white angle right large icon' id="arrow" /> 
                  </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     
>>>>>>> b88281d9ecb065ec4a49f950579af2fd347280c5
    </section>
)
export default Contact;