require('dotenv').config();
const axios = require('axios');

const baseUrl = `https://api.edamam.com/search`;
const apiKey = process.env.EDAMAM_APP_KEY;
const apiId = process.env.EDAMAM_APP_ID;

const getRecipe = (req, res) => {
  const { searchTerm } = req.body;
  axios.get(`${baseUrl}?q=${searchTerm}&app_id=${apiId}&app_key=${apiKey}&health=vegan`)
  .then(data => {
    res.status(200).json(data.data.hits);
  })
  .catch(err => {
    res.status(500).json(err);
  })
}

const recipeDetails = (req, res) => {
  const { id } = req.params;
  axios.get(`${baseUrl}?q=${id}&app_id=${apiId}&app_key=${apiKey}`)
    .then(data => {
      res.status(200).json(data.data.hits[0]);
    })
    .catch(err => {
      res.status(500).json(err);
    })
}

module.exports = {
  getRecipe,
  recipeDetails,
}