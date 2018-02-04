import React, { Component } from 'react';

import { Modal, Button, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import FacebookLoginButton from '../../auth/FacebookLoginButton';
import { Link } from 'react-router-dom';
import styles from './Header.scss';
import className from 'classnames';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }
  toggleModal = e => {
    e.preventDefault();
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    const addonClasses = className('input-group-addon', styles.addon);
    return (
      <div className={styles.wrapper}>
        <a href="/login" onClick={e => this.toggleModal(e)}>
          Sign In
        </a>
        <Modal
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
            <FacebookLoginButton />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.toggleModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Header);
