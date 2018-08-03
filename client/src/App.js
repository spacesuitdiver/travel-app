import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MeetTeam from './components/MeetTeam/MeetTeam';
import HowWorks from './components/HowWorks/HowWorks';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
// import Modal from './components/Modal/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Navbar/>
      <Header/>
      {/* <Modal/> */}
      <About/>
      <HowWorks/>
      <MeetTeam/>
      <Contact/>

      </div>
    );
  }
}

export default App;
