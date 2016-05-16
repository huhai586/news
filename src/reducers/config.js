import { handleActions } from 'redux-actions';
import { GET_CATEGORY,GET_FETCH_TYPE,
    GET_SOURCE_OPTION } from '../constants/actions';

import { merge } from 'lodash';

let optionsPublishStatus = [
    {value: '1', label: 'Published'},
    {value: '0', label: 'UnPublished'}
]

let timeTypeOption=[
    {value: '1', label: 'Published Time'},
    {value: '0', label: 'Review Time'}
]
let filterOption=[
    {value: '0', label: 'Latest release'},
    {value: '1', label: 'Most viewed'},
    {value: '2', label: 'Latest review'}

]
const initialState = {

    publishStatus: optionsPublishStatus,
    category: [],
    fetch_type: [],
    source_option: [],
    timeType:timeTypeOption,
    ajaxCount:0,
    filterOption:filterOption

};

export default handleActions({
    [GET_CATEGORY]: (state, action) => {
        // do nothing
        console.log("getcategory", action)
        let category=action.payload.map(obj=>(
        {value: obj.categoryCode, label: obj.categoryName}
        ));
        return merge({}, state, {
            category: category,
            ajaxCount: state.ajaxCount + 1
        });
    },
    [GET_FETCH_TYPE]: (state, action) => {
        let optionsFetch=action.payload.map(obj=>(
        {value: obj.sourceCode, label: obj.sourceName}
        ));

        return merge({}, state, {
            fetch_type: optionsFetch,
            ajaxCount:state.ajaxCount + 1
        });
    },
    [GET_SOURCE_OPTION]: (state, action) => {
        let sourceOption=action.payload.map(obj=>(
        {value: obj.sourceId, label: obj.sourceName}
        ));

        return merge({}, state, {
            source_option: sourceOption,
            ajaxCount: state.ajaxCount + 1
        });
    }


}, initialState);
