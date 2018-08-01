import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import HowWorks from './components/HowWorks/HowWorks';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <HowWorks />
        <Contact />
      </div>
    );
  }
}

export default App;
