import React, { Component } from 'react';
// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Products extends Component {
  render() {
    return (
      <div className="Products">

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h1>Products</h1>
      </div>
    );
  }
}

export default Products;
