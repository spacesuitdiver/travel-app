import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import CalendarPage from "./pages/CalendarPage/";
import InputTravelPage from "./pages/InputTravelPage/";
import HomePage from "./pages/HomePage/";
import CalendarTest from "./pages/CalendarTest/";



const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/travel" component={InputTravelPage} />
        <Route exact path="/travel/:travelId" component={CalendarPage} />
        <Route exact path="/calendar" component={CalendarTest} />
      </Switch>
    </div>
  </Router>
);

export default App;
