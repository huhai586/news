import { handleActions } from 'redux-actions';
import { GET_CATEGORY,GET_FETCH_TYPE } from '../constants/actions';

import { merge } from 'lodash';

let options = [
    { value: '1', label: 'Published' },
    { value: '0', label: 'UnPublished' }
]
const initialState = {

    publishStatus:options,
    category:[],
    fetch_type:[],
    source_option:{}

};

export default handleActions({
  [GET_CATEGORY]: (state, action) => {
    // do nothing
      console.log("getcategory",action)
    return merge({}, state, {
      category:action.payload.data
    });
  },
  [GET_FETCH_TYPE]: (state, action) => {
    return merge({}, state, {
      formResult: action.payload,
      formError: ""
    });
  }

}, initialState);
