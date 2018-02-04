import React from 'react';
import styles from './Rating.scss';
import Score from '../Score/Score';

const Rating = ({
  easiness,
  usefulness,
  professor,
  positiveVotes,
  negativeVotes,
  img,
  comment
}) => {
  function getRandomRating() {
    return 10 * Math.random();
  }
  easiness = getRandomRating().toFixed(0);
  usefulness = getRandomRating().toFixed(0);
  professor = getRandomRating().toFixed(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.ratingWrapper}>
        <div className={styles.rating}>
          <div className={styles.text}>
            <div className={styles.scores}>
              <Score score={easiness} outOf={10} letter="E" />
              <Score score={usefulness} outOf={10} letter="U" />
              <Score score={professor} outOf={10} letter="P" />
            </div>
            <div className={styles.comment}>{comment}</div>
          </div>
          <div className={styles.imgWrapper}>
            <img src={img} alt="profile" />
          </div>
        </div>
      </div>
      <div className={styles.votes}>
        <div className={styles.vote}>
          <div className={styles.numVotes}>{positiveVotes}</div>
          <div className={styles.good}>
            <i className="fa fa-check" />
          </div>
        </div>
        <div className={styles.vote}>
          <div className={styles.numVotes}>{negativeVotes}</div>
          <div className={styles.bad}>
            <i className="fa fa-times" />
          </div>
        </div>
      </div>
    </div>
  );
};

Rating.defaultProps = {
  positiveVotes: 0,
  negativeVotes: 0,
  img: '/img/trump.jpg',
  comment:
    'Ullamco quis fugiat incididunt sit nisi voluptate do fugiat consequat culpa in cillum commodo nisi.'
};

export default Rating;
