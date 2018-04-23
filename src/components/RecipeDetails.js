import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

class RecipeDetails extends Component {
  state = {
    label: '',
    dietLabels: [],
    healthLabels: [],
    image: '',
    ingredientLines: [],
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
          image: <img src={ result.data.recipe.image } alt={ result.data.recipe.label }/>,
          dietLabels: result.data.recipe.dietLabels.map((line, i) => {
            return (
              <ul>
                <li key={ i }>{ line }</li>
              </ul>
            )
          }),
          healthLabels:  result.data.recipe.healthLabels.map((line, i) => {
            return (
              <ul>
                <li key={ i }>{ line }</li>
              </ul>
            )
          }),
          ingredientLines:  result.data.recipe.ingredientLines.map((line, i) => {
            return (
              <ul>
                <li key={ i }>{ line }</li>
              </ul>
            )
          }),
        })
      })
  }

  render() {
    return (
      <div>
        <Navigation />
        { this.state.label }
        { this.state.image }
        { this.state.dietLabels }
        { this.state.healthLabels }
        { this.state.ingredientLines }
        { this.state.ingredients }        
      </div>
    )
  }
}

export default RecipeDetails;