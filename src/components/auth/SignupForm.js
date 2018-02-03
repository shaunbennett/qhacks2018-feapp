import React, { Component } from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import { firebase, auth } from '../firebase/firebase';

import { Container } from 'semantic-ui-react';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  render() {
    const { username, email, password, error, success } = this.state;

    const uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      signInSuccessUrl: '/signedIn',
      // We will display Google and Facebook as auth providers.
      signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccess: () => {
          this.setState({ signedIn: true });
          return false; // Avoid redirects after sign-in.
        }
      }
    };

    const { signedIn } = this.state;

    return (
      <Container style={{ marginTop: '7em' }}>
        {signedIn && <p>SIGNED IN</p>}
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </Container>
    );
  }
}

export default SignupForm;
