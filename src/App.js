import React, { Component } from 'react';
import { Results } from './components/Results';
import Navigation from './components/Navigation';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col } from 'reactstrap';
import './App.css';

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
      <div>
      <Navigation />
      <Container>
        <Row>
        </Row>
        <Row>
          <Col xs="6">
            <Form onSubmit={ this.handleSubmit }>
              <FormGroup>
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
      </div>
    );
  }
}

export default App;
