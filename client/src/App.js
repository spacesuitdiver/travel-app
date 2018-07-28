import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import MeetTeam from './components/MeetTeam/MeetTeam';
import HowWorks from './components/HowWorks/HowWorks';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Navbar/>
      <Header/>
      <HowWorks/>
      <MeetTeam/>
    
  

      </div>
    );
  }
}

export default App;
