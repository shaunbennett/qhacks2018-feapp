import React from 'react';
import { FirebaseAuth } from 'react-firebaseui';
import { Modal, Button, Image, Header, Form, Divider } from 'semantic-ui-react';

export default function LoginModal(props) {
  return (
    <Modal size="mini" {...props}>
      <Modal.Header as="h2" color="teal" textAlign="center">
        Login
      </Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Form>
        <Divider horizontal>Or</Divider>
        <FirebaseAuth uiConfig={props.uiConfig} firebaseAuth={props.auth} />
      </Modal.Content>
    </Modal>
  );
}
