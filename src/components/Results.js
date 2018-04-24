import {
  ListGroup,
  ListGroupItem,
  Card,
  Button,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

export const Results = (props) => {
  return (
    props.recipeList.map((recipe, i) => {
      return (
          <Card key={ i }>
            <CardImg top width="40%" height="40%" src={ recipe.recipe.image } alt={ recipe.recipe.label } />
              <CardTitle className="text-center">{ recipe.recipe.label }</CardTitle>
            <CardBody>
              {recipe.recipe.ingredients.map((ingredient, i) => {
                return <ListGroup key={ i }><ListGroupItem>{ ingredient.text }</ListGroupItem></ListGroup>
              })}
              <Link to={`/recipe/${recipe.recipe.label}`}><Button>Find out more</Button></Link>
            </CardBody>
          </Card>
      )
    })
  )
};