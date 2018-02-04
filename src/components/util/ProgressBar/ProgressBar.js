import React from 'react';
import styles from './ProgressBar.scss';
import { Line } from 'rc-progress';

function randomPercentage() {
  return 100 * Math.random();
}

const ProgressBar = ({ label, width, percent, color }) => {
  percent = randomPercentage();
  return (
    <div class={styles.wrapper}>
      <div class={styles.label}>{label}</div>
      <div class={styles.bar}>
        <Line
          strokeWidth={width}
          strokeColor={color}
          percent={percent}
          trailColor={'#FFF'}
          trailWidth={width}
        />
      </div>
      <div class={styles.percent}>{percent.toFixed(0) + '%'}</div>
    </div>
  );
};

ProgressBar.defaultProps = {
  width: 4,
  color: '#f64b61',
  label: 'Easiness'
};

export default ProgressBar;
