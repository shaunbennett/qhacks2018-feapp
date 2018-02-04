import React, { Component } from 'react';
import styles from './LoginPage.scss';
import FacebookLoginButton from '../../auth/FacebookLoginButton';

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="/img/login_page_bg.svg"
        alt="background"
        className={styles.img}
      />
      <div className={styles.formWrapper}>
        <div class={styles.buttonWrapper}>
          <FacebookLoginButton />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
