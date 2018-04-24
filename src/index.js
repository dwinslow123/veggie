import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import RecipeDetails from './components/RecipeDetails';
import Login from './components/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route path="/recipe/:id" component={ RecipeDetails } />
      <Route path="/login/" component={ Login } />
    </div>
  </Router>,
document.getElementById('root'));
