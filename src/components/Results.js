import {
  ListGroup,
  ListGroupItem,
  Row,
  Col } from 'reactstrap';
import React from 'react';

export const Results = (props) => {
  return (
    props.recipeList.map((recipe, i) => {
      return (
      <div className="recipe">
        <Row>
          <Col xs="12"><p>{ recipe.recipe.label }</p></Col>
          <Col xs="12"><img src={ recipe.recipe.image } alt={ recipe.recipe.label }/></Col>
          <Col xs="5">{ recipe.recipe.ingredientLines.map((ingredient, i) => {
            return <ListGroup><ListGroupItem key={ i }>{ ingredient }</ListGroupItem></ListGroup>
          })}</Col>
        </Row>
      </div>
      )
    })
  )
}