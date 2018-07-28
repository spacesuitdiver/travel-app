import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
          <Header/>
          

      </div>
    );
  }
}

export default App;
