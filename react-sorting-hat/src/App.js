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
    const question1= document.querySelector('.question1');
    const quiz = document.querySelector('.quiz');
    const questions = document.querySelectorAll('section');
    console.log(questions);
    questions.forEach(question => question.classList.add('hide'));
    quiz.classList.add('show');
    question1.classList.remove('hide');
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

  answerQuestion2 = event => {
    event.preventDefault();
    const form2 = document.querySelector('.form1');
    const question2 = document.querySelector('.question2');
    const question3 = document.querySelector('.question3');
    for (let i = 0; i < form2.length; i++) {
      if (form2[i].checked) {
        switch (form2[i].value) {
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
          default:
            break;
        }
      }
    }
    question2.classList.add('hide');
    question3.classList.remove('hide');
  } 

  answerQuestion3 = event => {
    event.preventDefault();
    const form3 = document.querySelector('.form3');
    const question3 = document.querySelector('.question3');
    const question4 = document.querySelector('.question4');
    for (let i = 0; i < form3.length; i++) {
      if (form3[i].checked) {
        switch (form3[i].value) {
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
          default:
            break;
        }
      }
    }
    question3.classList.add('hide');
    question4.classList.remove('hide');
  }

  answerQuestion4 = event => {
    event.preventDefault();
    const form4 = document.querySelector('.form4');
    const question4 = document.querySelector('.question4');
    const question5 = document.querySelector('.question5');
    for (let i = 0; i < form4.length; i++) {
      if (form4[i].checked) {
        switch (form4[i].value) {
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
          default:
            break;
        }
      }
    }
    question4.classList.add('hide');
    question5.classList.remove('hide');
  }

  answerQuestion5 = event => {
    event.preventDefault();
    const form5 = document.querySelector('.form5');
    const question5 = document.querySelector('.question5');
    const question6 = document.querySelector('.question6');
    for (let i = 0; i < form5.length; i++) {
      if (form5[i].checked) {
        switch (form5[i].value) {
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
          default:
            break;
        }
      }
    }
    question5.classList.add('hide');
    question6.classList.remove('hide');
  }

  answerQuestion6 = event => {
    event.preventDefault();
    const form6 = document.querySelector('.form6');
    const question6 = document.querySelector('.question6');
    const results = document.querySelector('.results');
    for (let i = 0; i < form6.length; i++) {
      if (form6[i].checked) {
        switch (form6[i].value) {
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
          default:
            break;
        }
      }
    }
    question6.classList.add('hide');
    results.classList.remove('hide');
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
