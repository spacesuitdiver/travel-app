import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
// import HowWorks from './components/HowWorks/HowWorks';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Weather from './components/Weather'
import Calendar from "./pages/Calendar/";
import Inputtravel from "./pages/Inputtravel/";
import Intro from "./pages/Intro/";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/travel" component={Inputtravel} />
        <Route exact path="/travel/:travelId" component={Calendar} />
      </Switch>
    </div>
  </Router>
);

export default App;
