import React, { Component } from "react";
import { auth } from "../firebase/firebase";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  submit = event => {
    const { username, email, password } = this.state;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log(authUser);
        this.setState({ auth: authUser });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });

    event.preventDefault();
  };

  render() {
    const { username, email, password, error, success } = this.state;

    return (
      <div id="signup-form">
        {/* {error && <p>Error: {error} </p>} */}
        {/* {success && <p>Success: {success} </p>} */}
        <form onSubmit={this.submit}>
          <input
            value={username}
            onChange={event => this.setState({ username: event.target.value })}
            type="text"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
            type="text"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
            type="password"
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}
