import React, { Component } from 'react';
import * as _ from 'lodash';
import { firebase } from './firebase/firebase';
import {
  Container,
  List,
  Statistic,
  Header,
  Item,
  Input,
  Menu,
  Grid,
  Dimmer,
  Loader,
  Segment
} from 'semantic-ui-react';

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * Math.floor(max - min));
}

function Score({ scoreValue }) {
  let color = '';
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

class Browse extends Component {
  constructor(props) {
    super(props);
    this.state = { spinning: false, searchText: '', courses: {} };

    this.searchHandler = this.createSpinningDebouncer(value => {
      this.setState({ searchText: value });
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

        this.setState({ courses });
      });
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
    const { searchText, courses } = this.state;
    return _.chain(courses)
      .filter(c => courseMatches(searchText, c))
      .sort(courseScoreComparator)
      .take(15)
      .value();
  }

  render() {
    const { courses, searchText, spinning } = this.state;
    const courseComponents = _.map(this.getFilteredCourses(), course => {
      return (
        <Item>
          <Item.Content>
            <Item.Image floated="right">
              <Score scoreValue={course.score} />
            </Item.Image>
            <Item.Header as="a">{course.code}</Item.Header>
            <Item.Meta>{course.title}</Item.Meta>
          </Item.Content>
        </Item>
      );
    });

    return (
      <Container text className="courses">
        <Input
          size="big"
          icon="search"
          placeholder="find courses/professors/friends"
          fluid
          onChange={e => this.searchHandler(e.target.value)}
          loading={spinning}
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
      </Container>
    );
  }
}

export default Browse;
