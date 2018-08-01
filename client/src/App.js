import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import calendar from "./pages/calendar/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import HowWorks from './components/HowWorks/HowWorks';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// import Weather from './components/Weather'

const App = () => (
  <Router>
    <div>
      <Navbar />
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


export default App;
