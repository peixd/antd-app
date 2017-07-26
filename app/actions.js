import C from './constants';

const api = require('./utils/api');
const queryPhoneNumber = api.queryPhoneNumber;

export function changeResult(data) {
    return {
        type: C.CHANGE_RESULT,
        payload: data
    }
}

export function changeQueryParams(data) {
    return {
        type: C.CHANGE_QUERY_PARAMS,
        payload: data
    }
}

export function changeGeneralQuery(generalQuery) {
    return {
        type: C.GENERAL_QUERY,
        payload: generalQuery
    }
}

export function showNavBar(data) {
    return {
        type: C.SHOW_NAV_BAR,
        payload: data
    }
}

export function changeCurrPage(data) {
    return {
        type: C.CHANGE_CURR_PAGE,
        payload: data
    }
}

/*
export const changeCurrPage = (queryParams, isAdvancedQuery) => dispatch => {
    dispatch({
        type: C.CHANGE_CURR_PAGE,
        payload: queryParams.currPage + 1
    })
    queryPhoneNumber(queryParams, isAdvancedQuery)
        .then(res => console.log(res))
        .catch(err => console.log(err.message))
}*/
