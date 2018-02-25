import React, { Component } from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import TodoList from './components/TodoList/TodoList';
import Header from './components/header/header';
import Homepage from './pages/homepage'
import Products from './pages/products'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />

          <Route exact path='/' component={Homepage} />
          <Route exact path='/Products' component={Products} />
          <Route exact path='/TodoList' component={TodoList} />

          {/* <TodoList /> */}



        </div>
      </Router>
    );
  }
}

export default App;
