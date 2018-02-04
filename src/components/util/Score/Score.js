import React from 'react';
import styles from './Score.scss';

const Score = ({ score, outOf, letter }) => {
  return (
    <div class={styles.wrapper}>
      <div className={styles.box}>{letter.toUpperCase()}</div>
      <div className={styles.text}>
        {score}/{outOf}
      </div>
    </div>
  );
};

export default Score;
