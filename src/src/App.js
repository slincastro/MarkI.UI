import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login-module/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Mark I</h1>
        </header>  
        <login/>    
      </div>
    );
  }
}

export default App;
