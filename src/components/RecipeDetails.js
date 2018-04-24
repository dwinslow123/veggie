import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  ListGroup,
  ListGroupItem } from 'reactstrap';

class RecipeDetails extends Component {
  state = {
    label: '',
    dietLabels: [],
    healthLabels: [],
    image: '',
    ingredientLines: [],
    url: '',
  }

  componentDidMount() {
    this.getDetails();
  }

  getDetails = () => {
    const { id } = this.props.match.params;
    console.log(id);
    axios.post(`http://localhost:3030/api/edamam/recipe/${id}`, { ...this.state })
      .then(result => {
        console.log(result);
        this.setState({
          label: result.data.recipe.label,
          image: result.data.recipe.image,
          dietLabels: result.data.recipe.dietLabels.map((line, i) => {
            return line + ' | ';
          }),
          healthLabels:  result.data.recipe.healthLabels.map((line, i) => {
            return line + ' | ';
          }),
          ingredientLines:  result.data.recipe.ingredientLines.map((line, i) => {
            return (
              <ListGroup>
                <ListGroupItem key={ i }>{ line }</ListGroupItem>
              </ListGroup>
            )
          }),
          url: result.data.recipe.url,
        })
      })
  }

  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <Card>
            <CardImg src={ this.state.image } alt={ this.state.label } />
            <CardTitle>{ this.state.label }</CardTitle>
            <CardSubtitle>
              { this.state.dietLabels }
              { this.state.healthLabels }
            </CardSubtitle>
            <CardBody>
              { this.state.ingredientLines }
              <a href={ this.state.url }><Button>Click here for the full recipe</Button></a>
            </CardBody>
          </Card>     
        </Container>
      </div>
    )
  }
}

export default RecipeDetails;