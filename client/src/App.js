import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <About/>
          <Contact/>

      </div>
    );
  }
}

export default App;
