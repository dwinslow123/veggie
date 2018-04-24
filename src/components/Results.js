import {
  ListGroup,
  ListGroupItem,
  Card,
  Media,
  Button,
  CardImg,
  CardBody,
  CardTitle } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

export const Results = (props) => {
  return (
    props.recipeList.map((recipe, i) => {
      return (
          <div>
            <Media className="mt-1">
              <Media left middle href={`/recipe/${recipe.recipe.label}`}>
                <Media object src={ recipe.recipe.image } alt={ recipe.recipe.label } />
              </Media>
                <Media body>
                  <Media heading>
                    { recipe.recipe.label }
                  </Media>
                  { recipe.recipe.dietLabels.map((label, i) => {
                    return `${label} | `;
                  })}
                  { recipe.recipe.healthLabels.map((label, i) => {
                    return `${label} | `;
                  })}
                </Media>
                <Link to={`/recipe/${recipe.recipe.label}`}><Button>Find out more</Button></Link>
            </Media>
          </div>
      )
    })
  )
};