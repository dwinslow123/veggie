import React, { Component } from 'react';
import Navigation from './Navigation';
import firebase from '../firebase/firebase';
import { auth } from '../firebase';

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
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: null, 
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    auth.doCreateUserWithEmailAndPassword(username, password)
      .then(authUser => {
        this.setState({
          username: '',
          password: '',
        });
      })
      .catch(error => {
        this.setState({
          error: error,
        })
      })
  }

  render() {
    return (
      <div>
        <Navigation />
        <Form onSubmit={ this.handleSubmit }>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              required="true" 
              name="username"
              value={ this.state.username }
              onChange={ this.handleChange }
              placeholder="e.g: steve@apple.com"
            />
            <FormFeedback>Looks good!</FormFeedback>
            <FormText>Enter an email address for your username</FormText>
          </FormGroup>
          <FormGroup onChange={ this.handleChange } value={ this.state.password }>
            <Label for="password">Password</Label>
            <Input
              type="password"
              required="true"
              name="password"
              value={ this.state.password }
              onChange={ this.handleChange }
            />
            <FormText>Enter a password</FormText>
            <FormFeedback>Great!</FormFeedback>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default Login;