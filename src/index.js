import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Members from './Members';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/members" component={Members} />
      </Switch>
    </div>
  </Router>, 
  document.getElementById('root')
);
registerServiceWorker();
