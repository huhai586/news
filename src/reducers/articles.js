import { handleActions } from 'redux-actions';
import { CHANGE_STATUS,GET_CATEGORY,CHANGE_CATEGORY,CHANGE_FETCH_TYPE,GET_SOURCE_OPTION,
    CHANGE_SOURCE_OPTION,STORE_SELECTED,CHANGE_TIME_TYPE,SET_TIME_FROM,SET_TIME_TO,SET_KEYWORD,QUERY_NEWS,CHANGE_FILTER_TYPE} from '../constants/actions';
import { merge } from 'lodash';
import { getDateToday, getDateBeforeWeek } from '../utils/common';

let time_from = getDateBeforeWeek(getDateToday()), time_to = getDateToday();
const initialState = {

    query: {
        publishStatus: "0",
        categoryCode: "",
        fetch_type: "",
        soucr_option: "",
        timeType: "1",
        time_from,
        time_to,
        keyword: "",
        orderType: "0",
        pageSize: 20,
        pageNo: 1
    },
    articlesList:{},
    error:"",
    selectedArticles:[]

};

//这是一个reducers
export default handleActions({
    [CHANGE_STATUS]: (state, action) => {
        return merge({}, state, {
            query: {publishStatus: action.payload}
        });
    },
    [CHANGE_CATEGORY]: (state, action) => {

        return merge({}, state, {
            query: {categoryCode: action.payload}
        });
    },
    [CHANGE_FETCH_TYPE]: (state, action) => {
        return merge({}, state, {
            query: {fetch_type: action.payload}
        });
    },
    [CHANGE_SOURCE_OPTION]: (state, action) => {

        return merge({}, state, {
            query: {soucr_option: action.payload}
        });
    },
    [CHANGE_TIME_TYPE]: (state, action) => {

        return merge({}, state, {
            query: {timeType: action.payload}
        });
    },
    [SET_TIME_FROM]: (state, action) => {
        console.log("开始时间", action)

        return merge({}, state, {
            query: {time_from: action.payload}
        });
    },
    [SET_TIME_TO]: (state, action) => {
        console.log("结束时间", action)
        return merge({}, state, {
            query: {time_to: action.payload}
        });
    },
    [SET_KEYWORD]: (state, action) => {
        return merge({}, state, {
            query: {keyword: action.payload}
        });
    },
    [QUERY_NEWS]: (state, action) => {
        if(action.error){
            console.warn("出现错误",action);
            return merge({}, state, {
                error: action.msg
            });
        }
        return merge({}, state, {
            articlesList: action.payload
        });
    },
    [CHANGE_FILTER_TYPE]: (state, action) => {
        return merge({}, state, {
            query:{orderType:action.payload}
        });
    },
    [STORE_SELECTED]: (state, action) => {
        //var
        return merge({}, state, {
            selectedArticles:selectedArticles
        });
    }




}, initialState);



