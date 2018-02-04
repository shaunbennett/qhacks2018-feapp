import React, { Component } from 'react';
import styles from './App.scss';

class App extends Component {
  render() {
    return <div className={styles.wrapper}>{this.props.children}</div>;
  }
}

export default App;
