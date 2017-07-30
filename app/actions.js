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

export function addFav(data) {
    return {
        type: C.ADD_FAV,
        payload: data
    }
}

export function removeFav(data) {
    return {
        type: C.REMOVE_FAV,
        payload: data
    }
}

export function changeCurrPage(data) {
    return {
        type: C.CHANGE_CURR_PAGE,
        payload: data
    }
}

export function cancelFetching() {
    return {
        type: C.CANCLE_FETCHING
    }
}

export function fetching() {
    return {
        type: C.FETCHING
    }
}
