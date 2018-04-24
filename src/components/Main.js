import React, { Component } from 'react';
import { Results } from './Results';
import Navigation from './Navigation';
import axios from 'axios';
import {
  Button,
  Form,
  Jumbotron,
  FormGroup,
  Input,
  Container,
  Row,
  Col } from 'reactstrap';
import '../App.css';

class Main extends Component {
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
      <Jumbotron fluid>
        <Container fluid className="text-center">
          <h1 className="display-3">Welcome to Veggie.</h1>
          <p className="lead">Every recipe you see will be 100% vegan.</p>
          <p className="lead">Try it out!</p>
        </Container>
      </Jumbotron>
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
                  placeholder="Search for a recipe using an ingredient"
                  value={ this.state.searchTerm }
                  onChange={ this.handleInput }
                />
              </FormGroup>
            </Form>
          </Col>
          <Button onClick={ this.handleSubmit }>Search</Button>
        </Row>
          <Results recipeList={ this.state.recipeList } />
      </Container>
      </div>
    );
  }
}

export default Main;