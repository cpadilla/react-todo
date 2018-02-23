import React, { Component } from 'react';
// import logo from './logo.svg';
import TodoList from './components/TodoList/TodoList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>Chris's React To-Do List</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
