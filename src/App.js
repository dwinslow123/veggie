import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col } from 'reactstrap';
import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import { Results } from './components/Results';

class App extends Component {
  state = {
    searchTerm: '',
    recipeList: [],
  }

  handleInput = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3030/api/edamam/', { ...this.state })
      .then(results => {
        console.log(results);
        this.setState({
          searchTerm: '',
          recipeList: results.data,
        })
      })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Form onSubmit={ this.handleSubmit }>
              <FormGroup>
                <Label for="searchBar">
                  Recipe Search
                </Label>
                <Input
                  type="search"
                  id="searchBar"
                  placeholder="Search for a recipe"
                  value={ this.state.searchTerm }
                  onChange={ this.handleInput }
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
          <Results recipeList={ this.state.recipeList } />
      </Container>
    );
  }
}

export default App;
