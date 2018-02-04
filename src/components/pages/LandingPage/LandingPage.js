import React, { Component } from 'react';
import styles from './LandingPage.scss';
import bg_img from './landing_page_bg.svg';
import SearchBar from '../../layout/SearchBar/SearchBar';
import { browserHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchCourseFromLanding } from '../../../actions/courseActions';
class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }
  handleChange = e => {
    this.props.history.push('/courses');
    this.props.doSearch(e.target.value);
    // this.setState({
    // input: e.target.value
    // });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <img
          src="/img/landing_page_bg.svg"
          alt="background"
          className={styles.img}
        />
        <div className={styles.formWrapper}>
          <SearchBar
            onChange={e => this.handleChange(e)}
            value={this.state.input}
          />
          <div class={styles.links}>
            <Link to="/courses">Explore Courses</Link>
            <Link to="/">Job Opportunities</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    doSearch: text => {
      dispatch(searchCourseFromLanding(text));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
