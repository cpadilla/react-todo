import React, { Component } from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <h1>Welcome to the homepage.</h1>
      </div>
    );
  }
}

export default Homepage;
