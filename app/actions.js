import C from './constants';

export function addFav(
    phoneNumber,
    statusName,
    prePnLevelId,
    pnLevelId,
    realPnLowPrice,
    realPreStorePrice,
    name) {

    return {
        type: C.ADD_FAV,
        payload: {phoneNumber,
            statusName,
            prePnLevelId,
            pnLevelId,
            realPnLowPrice,
            realPreStorePrice,
            name}
    }

}

export function removeFav(i) {
    return {
        type: C.REMOVE_FAV,
        payload: i
    }
}

export function queryPhoneNumChange(phoneNum) {
    return {
        type: C.QUERY_PHONE_NUM_CHANGE,
        payload: phoneNum
    }
}

export function generalQuery(params) {
    return {
        type: C.GENERAL_QUERY_PARAMS,
        payload: params
    }
}