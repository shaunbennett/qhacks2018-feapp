import React from 'react';
import styles from './Profile.scss';

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <img
        src="/img/profile_page.svg"
        alt="background"
        className={styles.img}
      />
    </div>
  );
};

export default Profile;
