import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import HowWorks from './components/HowWorks/HowWorks';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Weather from './components/Weather';
import inputtravel from "./pages/inputtravel/";
import Input from "./components/TravelForm/Input";

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

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Header />
      <About />
      <HowWorks />
      <Contact />
      <Input />
      <Weather />
      <Switch>
        <Route exact path="/test" component={inputtravel} />
        <Route exact path="/Input" component={Input} />
      </Switch> 
    </div>
  </Router>
);

export default App;
