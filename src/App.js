import React, { Component } from 'react';
import LikeButton from './components/LikeButton/LikeButton';
import logo from './logo.svg';
import './App.css';
import LessonsList from "./components/Title/Title";
import CommentApp from "./components/commentApp/CommentApp";

const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <LikeButton />
          <LessonsList lessons={ lessons }/>
          <CommentApp/>
      </div>
    );
  }
}

export default App;
