const getApi = (url) => '/cms' + url;

export const CODE_SUCCESS = 200;
export const GET_USER = getApi('/address');
export const SAVE_CONFIG = getApi('/config');
export const GET_CHART_DATA = getApi('/chartData');
export const GET_CATEGORY = getApi('/category/list');
export const GET_FETCH_TYPE = getApi('/source/topLevelList');
export const GET_SOURCE_OPTION = getApi('/source/query');
export const QUERY_NEWS = getApi('/content/list');

