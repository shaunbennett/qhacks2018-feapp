import React, { Component } from 'react';
import styles from './CoursePage.scss';
import ProgressBar from '../../util/ProgressBar/ProgressBar';
import Rating from '../../util/Rating/Rating';

const DEFAULT_PROPS = {
  code: 'CISC101',
  title: 'Elements of Computer Science',
  description:
    'Introduction to algorithms: their definition, design, coding, andexecution on computers. Intended for students who have noprogramming experience. All or most assignment workwill be completed during lab time.',
  units: '3.0'
};
class CoursePage extends Component {
  render() {
    const { code, title, description, units } = DEFAULT_PROPS;
    return (
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.infoText}>
            <div className={styles.code}>{code + '/' + units}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
          </div>
          <div className={styles.graphs}>
            <ProgressBar label="Easiness: " />
            <ProgressBar label="Usefulness: " />
            <div className={styles.sectionTitle}>Fall Term</div>
            <ProgressBar label="Prof Felicia" />
            <div className={styles.sectionTitle}>Fall Term</div>
            <ProgressBar label="Prof Hollie" />
          </div>
        </div>
        <div className={styles.reviewsWrapper}>
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
      </div>
    );
  }
}

export default CoursePage;
