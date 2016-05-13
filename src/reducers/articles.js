import { handleActions } from 'redux-actions';
import { CHANGE_STATUS,GET_CATEGORY,CHANGE_CATEGORY,CHANGE_FETCH_TYPE,GET_SOURCE_OPTION,
    CHANGE_SOURCE_OPTION,CHANGE_TIME_TYPE,SET_TIME_FROM,SET_TIME_TO,SET_KEYWORD} from '../constants/actions';
import { merge } from 'lodash';
import { getDateToday, getDateBeforeWeek } from '../utils/common';

let time_from=getDateBeforeWeek(getDateToday()),time_to=getDateToday();
const initialState = {

    query:{
      publishStatus:"0",
      categoryCode:"",
      fetch_type:"",
      soucr_option:"",
      timeType:"1",
      time_from,
      time_to,
      keyword:""
  }

};

//����һ��reducers
export default handleActions({
  [CHANGE_STATUS]: (state, action) => {
    return merge({}, state, {
     query:{publishStatus:action.payload}
    });
  },
    [CHANGE_CATEGORY]: (state, action) => {

        return merge({}, state, {
            query:{categoryCode:action.payload}
        });
    },
    [CHANGE_FETCH_TYPE]: (state, action) => {
        return merge({}, state, {
            query:{fetch_type:action.payload}
        });
    },
    [CHANGE_SOURCE_OPTION]: (state, action) => {

        return merge({}, state, {
            query:{soucr_option:action.payload}
        });
    },
    [CHANGE_TIME_TYPE]: (state, action) => {

        return merge({}, state, {
            query:{timeType:action.payload}
        });
    },
    [SET_TIME_FROM]: (state, action) => {
        console.log("��ʼʱ��",action)

        return merge({}, state, {
            query:{time_from:action.payload}
        });
    },
    [SET_TIME_TO]: (state, action) => {
        console.log("����ʱ��",action)
        return merge({}, state, {
            query:{time_to:action.payload}
        });
    },
    [SET_KEYWORD]: (state, action) => {
        return merge({}, state, {
            query:{keyword:action.payload}
        });
    }





}, initialState);



