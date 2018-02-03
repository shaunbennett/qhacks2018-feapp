import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';
import FacebookLoginButton from './FacebookLoginButton';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-form">
    <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}
    </style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Login to QCourses
            </Header>
            <Form size="large">
                <FacebookLoginButton/>
            </Form>
            <Message>
              New user? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
