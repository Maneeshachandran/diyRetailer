import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/App.jsx';
import StoreList from './components/StoreList.jsx';
import Ingredients from './components/IngredientsPage.jsx';

import './styles/index.css';

injectTapEventPlugin();

render(

  <Router>
      <div>
          <Route exact path= '/' component={App}/>
          <Route path= '/ingredients' component={Ingredients}/>
      </div>
  </Router>,
  document.getElementById('root')
);
