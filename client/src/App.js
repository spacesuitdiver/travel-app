import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
// import MeetTeam from './components/MeetTeam/MeetTeam';
// import HowWorks from './components/HowWorks/HowWorks';
// import About from './components/About/About';
// import Contact from './components/Contact/Contact';
// import Modal from './components/Modal/Modal';
import CalenderPage from "./pages/CalenderPage/";
import InputTravelPage from "./pages/InputTravelPage/";
import HomePage from "./pages/HomePage/";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/travel" component={InputTravelPage} />
        <Route exact path="/travel/:travelId" component={CalenderPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
