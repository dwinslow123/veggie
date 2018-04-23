import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import RecipeDetails from './components/RecipeDetails';

import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route path="/recipe" component={ RecipeDetails } />
    </div>
  </Router>,
document.getElementById('root'));
