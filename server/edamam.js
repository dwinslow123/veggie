require('dotenv').config();
const axios = require('axios');

const baseUrl = `https://api.edamam.com/search`;
const apiKey = process.env.EDAMAM_APP_KEY;
const apiId = process.env.EDAMAM_APP_ID;

const getRecipe = (req, res) => {
  const { searchTerm } = req.body;
  axios.get(`${baseUrl}?q=${searchTerm}&app_id=${apiId}&app_key=${apiKey}`)
  .then(data => {
    res.status(200).json(data.data.hits);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
}

module.exports = {
  getRecipe,
}