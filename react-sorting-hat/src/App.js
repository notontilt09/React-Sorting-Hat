import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro'
import Quiz from './Quiz'

class App extends Component {
  constructor() {
    super();
    this.state= {
      gryffindor: 0,
      slytherin: 0,
      ravenclaw: 0,
      hufflepuff: 0
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hogwarts!</h1>
        </header>
        <Intro sortMe={this.sortMe}/>
        <Quiz />
      </div>
    );
  }
}

export default App;
