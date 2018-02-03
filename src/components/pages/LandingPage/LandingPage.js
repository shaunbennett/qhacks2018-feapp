import React from 'react';
import styles from './LandingPage.scss';
import bg_img from './landing_page_bg.svg';
const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="/img/landing_page_bg.svg"
        className={styles.img}
        alt="background"
      />
    </div>
  );
};

export default LandingPage;
