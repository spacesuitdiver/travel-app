import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import InputTravelPage from "./pages/InputTravelPage/";
import HomePage from "./pages/HomePage/";
import Calendar from "./pages/Calendar/Calendar";
import TravelAgenda from "./pages/TravelAgenda/";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/travel" component={InputTravelPage} />
        <Route exact path="/travel/:travelId" component={TravelAgenda} />
        <Route exact path="/calendar" component={Calendar} />
      </Switch>
    </div>
  </Router>
);

export default App;
