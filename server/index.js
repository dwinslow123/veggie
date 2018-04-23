require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const edamam = require('./edamam');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(cors());
app.use(bodyParser.json());

app.post('/api/edamam', edamam.getRecipe);

const PORT = 3030;

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is listening on port ${PORT}`);
  } else {
    console.log(err);
  }
})