import {
  Media,
  Button } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

import '../css/styles.css';

export const Results = (props) => {
  return (
    props.recipeList.map((recipe, i) => {
      return (
          <div className="results-list" key={ i }>
            <Media className="mt-5 recipe-card">
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
                  <div>
                    <Link to={`/recipe/${recipe.recipe.label}`}><Button>Find out more</Button></Link>
                  </div>
                </Media>
            </Media>
          </div>
      )
    })
  )
};