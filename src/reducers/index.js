import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import dashboard from './dashboard';
import articles from './articles';
import statistics from './statistics';
import config from './config';

export default combineReducers({
  routeReducer, // react router
  form: formReducer, // redux form
  // custom reducers
  dashboard,
  statistics,
  config,
  articles
})
