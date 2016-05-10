import React from 'react';
import { Router, Route, IndexRedirect, IndexRoute, hashHistory } from 'react-router';
import App from './containers/App';
import NotFound from './containers/NotFound';
import Articles from './containers/Articles';
import Statistics from './containers/Statistics';
import Config from './containers/Config';

export default React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="articles" component={Articles}/>
          <Route path="statistics" component={Statistics}/>
          <Route path="config" component={Config}>
            <Route path=":id" component={Config}/>
          </Route>
          <IndexRedirect to="articles"/>
          <Route path="*" component={NotFound}/>
        </Route>
      </Router>
    );
  }
});
