import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
// import calendar from "./pages/calendar/";
=======
>>>>>>> afc61b3082f0205f6409c8dddb6c408e1b2a5229
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import HowWorks from './components/HowWorks/HowWorks';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
<<<<<<< HEAD
// import Weather from './components/Weather'
=======
import Weather from './components/Weather'
import inputtravel from "./pages/inputtravel/";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Header />
//         <About />
//         <HowWorks />
//         <Contact />
//         <Weather />
//       </div>
//     );
//   }
// }
>>>>>>> afc61b3082f0205f6409c8dddb6c408e1b2a5229

const App = () => (
  <Router>
    <div>
      <Navbar />
<<<<<<< HEAD
        <Header />
        <About />
        <HowWorks />
        <Contact />
      <Switch>
        {/* <Route exact path="/test" component={calendar} /> */}
      </Switch>
      {/* <Weather/> */}
    </div>
  </Router>
);

=======
      <Header />
      <About />
      <HowWorks />
      <Contact />
      <Weather />
      <Switch>
        <Route exact path="/test" component={inputtravel} />
      </Switch>
    </div>
  </Router>
);
>>>>>>> afc61b3082f0205f6409c8dddb6c408e1b2a5229

export default App;
