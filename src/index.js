import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Overview from './pages/Overview';
import Chosen from './pages/Chosen';
import * as serviceWorker from './serviceWorker';
import './index.module.css';

const Index = () => (
  <Router>
    <Switch>
      <Route path='/chosen' component={Chosen} />
      <Route path='/' component={Overview} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
