import React, { Component } from 'react';
import * as _ from 'lodash';
import { firebase } from '../../../firebase/firebase';
import {
  Container,
  Statistic,
  Header,
  Item,
  Input,
  Menu,
  Grid,
  Segment
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { searchCourse, getCourseData } from '../../../actions/courseActions';

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min));
}

function Score({ scoreValue }) {
  let color = 'black';
  if (scoreValue > 80) color = 'green';
  else if (scoreValue <= 50) color = 'red';

  return (
    <div className="scores">
      <Statistic color={color} floated="right" size="mini">
        <Statistic.Label>score</Statistic.Label>
        <Statistic.Value>{scoreValue}</Statistic.Value>
      </Statistic>
    </div>
  );
}

function courseMatches(searchText, course) {
  return (
    (course.code &&
      course.code.toLowerCase().includes(searchText.toLowerCase())) ||
    (course.title &&
      course.title.toLowerCase().includes(searchText.toLowerCase()))
  );
}

function courseScoreComparator(courseA, courseB) {
  return courseB.score - courseA.score;
}

const mapStateToProps = state => {
  return {
    courseSearchString: state.course.courseSearchString,
    forceInputField: state.course.forceInputField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchCourses: searchText => {
      dispatch(searchCourse(searchText));
    }
  };
};

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinning: true,
      courses: {},
      searchFieldString: props.courseSearchString
    };

    this.searchHandler = this.createSpinningDebouncer(value => {
      props.searchCourses(value);
    }, 200).bind(this);
  }

  componentDidMount() {
    firebase
      .database()
      .ref('/courses/')
      .once('value')
      .then(snapshot => {
        const courses = _.mapValues(snapshot.val(), c => {
          return { ...c, score: getRandomInt(10, 99) };
        });

        this.setState({ courses, spinning: false });
      });

    if (this.props.forceInputField) {
      console.log('FORCING FOCUS');
      this.searchInput.focus();
    }
  }

  createSpinningDebouncer(func, wait) {
    const debounceFn = _.debounce(v => {
      this.setState({ spinning: false });
      func.apply(this, [v]);
    }, wait);

    return v => {
      this.setState({ spinning: true });
      debounceFn.apply(this, [v]);
    };
  }

  getFilteredCourses() {
    const { courseSearchString } = this.props;
    const { courses } = this.state;
    return _.chain(courses)
      .filter(c => c.title !== '') // remove courses with empty titles
      .filter(c => courseMatches(courseSearchString, c))
      .sort(courseScoreComparator)
      .take(10)
      .value();
  }

  render() {
    const { courseSearchString } = this.props;
    const { courses, spinning, searchFieldString } = this.state;
    let courseComponents = _.map(this.getFilteredCourses(), course => {
      return (
        <Item key={course.title}>
          <Item.Content>
            <Item.Image floated="right">
              <Score scoreValue={course.score} />
            </Item.Image>
            <Item.Header as={Link} to={`/courses/${course.code}`}>
              {course.code}
            </Item.Header>
            <Item.Meta>{course.title}</Item.Meta>
          </Item.Content>
        </Item>
      );
    });

    if (courseComponents.length == 0) {
      courseComponents = (
        <Header style={{ marginLeft: '8em' }}>No Courses Found</Header>
      );
    }

    const backgroundStyle = {
      zIndex: -1000,
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      position: 'fixed'
    };

    return (
      <Container style={{ marginTop: '4em' }} text className="courses">
        <Segment>
          <img
            src="/img/landing_page_bg.svg"
            alt="background"
            style={backgroundStyle}
          />
          <Input
            size="big"
            icon="search"
            placeholder="find courses/professors/friends"
            fluid
            ref={input => {
              this.searchInput = input;
            }}
            onChange={e => {
              this.setState({ searchFieldString: e.target.value });
              this.searchHandler(e.target.value);
            }}
            loading={spinning}
            value={searchFieldString}
            // this is hacky as shit, but basically it makes it so when the input field is focused,
            // the cursor will be at the end of the text instead of the start
            onFocus={e => {
              var val = e.target.value;
              e.target.value = '';
              e.target.value = val;
            }}
          />
          <Grid style={{ marginTop: '1em' }}>
            <Grid.Row>
              <Grid.Column width={3}>
                <Menu secondary text vertical>
                  <Menu.Item header>Sort By</Menu.Item>
                  <Menu.Item
                    name="mostPopular"
                    // active={activeItem === 'closest'}
                    // onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="tough"
                    // active={activeItem === 'mostComments'}
                    // onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="easy"
                    // active={activeItem === 'mostComments'}
                    // onClick={this.handleItemClick}
                  />
                  <Menu.Item
                    name="recommended"
                    // active={activeItem === 'mostPopular'}
                    // onClick={this.handleItemClick}
                  />
                </Menu>
              </Grid.Column>
              <Grid.Column width={13}>
                {/* <Segment> */}
                {/* <Dimmer inverted active={spinning}> */}
                {/* <Loader /> */}
                {/* </Dimmer> */}
                <Item.Group divided>{courseComponents}</Item.Group>
                {/* </Segment> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
