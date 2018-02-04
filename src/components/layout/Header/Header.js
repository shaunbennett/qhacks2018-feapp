import React, { Component } from 'react';

// import { Modal, Button, Row } from 'react-bootstrap';
import { Modal, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import FacebookLoginButton from '../../auth/FacebookLoginButton';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import className from 'classnames';
import { FirebaseAuth } from 'react-firebaseui';
import { firebase } from '../../../firebase/firebase';
import { connect } from 'react-redux';
import { authenticateUser, logoutUser } from '../../../actions/authActions';
import LoginModal from './LoginModal';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };

    this.uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      // We will display Google and Facebook as auth providers.
      signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
      callbacks: {
        signInSuccess: user => {
          this.setState({ visible: false });
          return false; // Avoid redirects after sign-in.
        }
      }
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        this.props.authenticateUser(user);
      } else {
        // No user is signed in.
        this.props.logoutUser();
      }
    });
  }

  logout = e => {
    if (e) {
      e.preventDefault();
    }
    firebase.auth().signOut();
    this.props.logoutUser();
  };

  toggleModal = e => {
    if (e) {
      e.preventDefault();
    }
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const addonClasses = className('input-group-addon', styles.addon);
    const { auth } = this.props;
    return (
      <div className={styles.wrapper}>
        {auth.authenticated && (
          <a href="" onClick={e => this.logout(e)}>
            <Image src={auth.user.photoURL} avatar />
            {auth.user.displayName}
          </a>
        )}
        {!auth.authenticated && (
          <a href="/login" onClick={e => this.toggleModal(e)}>
            Sign In / Register
          </a>
        )}
        <LoginModal
          open={this.state.visible}
          onClose={e => this.toggleModal(e)}
          uiConfig={this.uiConfig}
          auth={firebase.auth()}
        />
        {/* <Modal
          {...this.props}
          bsSize="small"
          aria-labelledby="contained-modal-title-sm"
          show={this.state.visible}
          onHide={e => this.toggleModal(e)}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="input-group">
              <div className={addonClasses}>
                <span className="">
                  <i className="fa fa-envelope" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="e-mail"
                aria-label="Search"
              />
            </div>
            <div className="input-group">
              <div className={addonClasses}>
                <span className="">
                  <i className="fa fa-lock" />
                </span>
              </div>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                aria-label="Search"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Log In</button>
            </div>
            <div className={styles.divider} />
            <FirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.toggleModal}>Close</Button>
          </Modal.Footer>
        </Modal> */}
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
    authenticateUser: user => dispatch(authenticateUser(user)),
    logoutUser: () => dispatch(logoutUser())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
