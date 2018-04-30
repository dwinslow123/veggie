import React, { Component } from 'react';
import Navigation from './Navigation';

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText
} from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input required />
            <FormFeedback>Looks good!</FormFeedback>
            <FormText>Enter an email address for your username</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" required />
            <FormText>Enter a password</FormText>
            <FormFeedback>Great!</FormFeedback>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Login;