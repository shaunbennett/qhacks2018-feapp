import React, { Component } from 'react';
import styles from './LoginForm.scss';

import FacebookLoginButton from '../FacebookLoginButton';

export default class LoginForm extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <FacebookLoginButton />
      </div>
    );
  }
}
