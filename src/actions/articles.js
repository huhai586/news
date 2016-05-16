import { GET_FETCH_TYPE,GET_SOURCE_OPTION,CHANGE_FETCH_TYPE ,CHANGE_SOURCE_OPTION,
    CHANGE_TIME_TYPE,SET_TIME_FROM,SET_TIME_TO,SET_KEYWORD,QUERY_NEWS,CHANGE_FILTER_TYPE,STORE_SELECTED} from '../constants/actions';
import { createAction } from 'redux-actions';
import API from '../utils/api';

//creation
//获取方式+来源选项的action
export const getFetchType=createAction(GET_FETCH_TYPE,API.getFetchType);
export const getSourceOption=createAction(GET_SOURCE_OPTION,API.getSourceOption);

export const changeFetchType=createAction(CHANGE_FETCH_TYPE);
export const changeSourceOption=createAction(CHANGE_SOURCE_OPTION);


export const changeTimeType=createAction(CHANGE_TIME_TYPE);

export const setTimeFrom=createAction(SET_TIME_FROM);
export const setTimeTo=createAction(SET_TIME_TO);
export const storeKeyWord=createAction(SET_KEYWORD);
export const queryNews=createAction(QUERY_NEWS,API.queryNews);
export const changeFilterType=createAction(CHANGE_FILTER_TYPE);
export const storeSelected=createAction(STORE_SELECTED);

