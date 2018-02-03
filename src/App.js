import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';

import SignupForm from './auth/SignupForm';
import LoginForm from './auth/LoginForm';
import Browse from './Browse';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default App;
