import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro'
import Quiz from './Quiz'

class App extends Component {
  constructor() {
    super();
    this.state = {
      gryffindor: 0,
      slytherin: 0,
      ravenclaw: 0,
      hufflepuff: 0
    }
  }

  sortMe = () => {
    const intro = document.querySelector('.intro');
    const quiz= document.querySelector('.quiz');
    const question2 = document.querySelector('.question2');
    question2.classList.add('hide');
    quiz.classList.add('show');
    intro.classList.add('hide');
  }

  answerQuestion1 = event => {
    event.preventDefault();
    const form1 = document.querySelector('.form1');
    const question1 = document.querySelector('.question1');
    const question2 = document.querySelector('.question2');
    for (let i = 0; i < form1.length; i++) {
      if (form1[i].checked) {
        switch (form1[i].value) {
          case 'gryffindor':
            this.setState({...this.state, gryffindor: this.state.gryffindor + 10})
            break;
          case 'hufflepuff':
          this.setState({...this.state, hufflepuff: this.state.hufflepuff + 10})
          break;
          case 'ravenclaw':
            this.setState({...this.state, ravenclaw: this.state.ravenclaw + 10})
            break;
          case 'slytherin':
            this.setState({...this.state, slytherin: this.state.slytherin + 10})
            break;
          case 'unknown':
            this.setState({...this.state, hufflepuff: this.state.hufflepuff + 10})
            break;
          default:
            break;
        }
      }
    }
    question1.classList.add('hide');
    question2.classList.remove('hide');

  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hogwarts!</h1>
        </header>
        <Intro sortMe={this.sortMe}/>
        <Quiz 
          houses={this.state} 
          answerQuestion1={this.answerQuestion1}
          answerQuestion2={this.answerQuestion2}
          answerQuestion3={this.answerQuestion3}
          answerQuestion4={this.answerQuestion4}
          answerQuestion5={this.answerQuestion5}
          answerQuestion6={this.answerQuestion6}
        />
      </div>
    );
  }
}

export default App;
