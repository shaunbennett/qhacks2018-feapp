import React from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Image,
  List,
  Menu,
  Segment
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import { Link } from 'react-router-dom';
import styles from './Header.scss';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/login">Sign In</Link>
    </div>
  );
};

export default withRouter(Header);
