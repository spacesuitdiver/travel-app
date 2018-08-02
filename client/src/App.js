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
import calendar from "./pages/calendar/";
import inputtravel from "./pages/inputtravel/";
import intro from "./pages/intro/";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={intro} />
        <Route exact path="/travel" component={inputtravel} />
        <Route exact path="/travel/:id" component={calendar} />
      </Switch>
    </div>
  </Router>
);

export default App;
