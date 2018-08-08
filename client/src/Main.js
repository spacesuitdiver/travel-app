// Resuable Navbar
import React, { Component } from "react";
import "./components/Navbar/Navbar.css";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import InputTravelPage from "./pages/InputTravelPage/InputTravelPage";
import HomePage from "./pages/HomePage/HomePage";

import LoginPage from './containers/LoginPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}
      />
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

// *********** COMPONENT STARTS *******

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      userId: null
    }
  };


  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()

  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated(),
    userId: Auth.getUserId() })

  }

  handleSmoothScrollContact = (event) => {
    event.preventDefault ()
   var element = document.getElementById("contact");
   element.scrollIntoView({behavior: "smooth"});
  }

  handleSmoothScrollServices = (event) => {
    event.preventDefault ()
   var element = document.getElementById("services");
   element.scrollIntoView({behavior: "smooth"});
  }

  handleSmoothScrollAbout = (event) => {
    event.preventDefault ()
   var element = document.getElementById("about");
   element.scrollIntoView({behavior: "smooth"});
  }

  // User Login/Register

  

  render() {
    return (
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>   
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav"> 
          {/* id was navbar */}
          <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page-top" target="blank"> <img class="smtNav" src="/images/SMT1.png" alt="SMT"/></a>

              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>


            <div className="collapse navbar-collapse" id="navbarResponsive">
              {/* id was navbarNav */}

              {this.state.authenticated ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/"><i className="fas fa-home"></i> Home</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link js-scroll-trigger" href="#services" onClick={this.handleSmoothScrollServices}>Services</a> */}
                    <Link className="nav-link js-scroll-trigger" to="/travel" onClick={this.handleSmoothScrollServices}>Travel</Link>
                  </li>

                  <li className="nav-item">
                    {/* <a className="nav-link js-scroll-trigger" href="#contact" onClick={this.handleSmoothScrollContact}>Contact</a> */}
                    <Link className="nav-link js-scroll-trigger" to="/calendar" onClick={this.handleSmoothScrollContact}>Calendar</Link>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/logout"><i className="fas fa-sign-out-alt"></i> Log Out</a>
                  </li>
                </ul>





              ):(

             
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    {/* <a className="nav-link js-scroll-trigger" href="#about" onClick={this.handleSmoothScrollAbout}>About</a> */}
                    <Link className="nav-link js-scroll-trigger" href="#about" onClick={this.handleSmoothScrollAbout}>About</Link>
                  </li>

                  <li className="nav-item">
                    {/* <a className="nav-link js-scroll-trigger" href="#services" onClick={this.handleSmoothScrollServices}>Services</a> */}
                    <Link className="nav-link js-scroll-trigger" href="#services" onClick={this.handleSmoothScrollServices}>Services</Link>
                  </li>

                  <li className="nav-item">
                    {/* <a className="nav-link js-scroll-trigger" href="#contact" onClick={this.handleSmoothScrollContact}>Contact</a> */}
                    <Link className="nav-link js-scroll-trigger" href="#contact" onClick={this.handleSmoothScrollContact}>Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login"><i className="fas fa-sign-in-alt"></i>Log In</Link>
                  </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup"><i className="fas fa-user-plus"></i>Sign Up</Link>
                    </li>
                </ul>

              )}                        
              </div>
            </div>
          </nav>

            <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
            <Route path="/logout" component={LogoutFunction}/>
            <PrivateRoute path="/travel/:userId" component={InputTravelPage}/> 
            {/* ^^ ProfilePage */}

        </Router> 
      </MuiThemeProvider>
    </div> 
             

    );
  }
}

export default Main;