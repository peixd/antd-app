import { combineReducers } from 'redux'
import C from '../constants'

const MAX = 5

export const favorites = (state=[], action) => {
  switch(action.type) {
      case C.ADD_FAV :
        // 如果已有记录先删除
        const newState = state.filter((item, index) => item.PHONE_NUMBER != action.payload.PHONE_NUMBER)
        // 如果收藏的号码记录数大于MAX, 将最早的收藏删除
        if(newState.length >= MAX)
            newState.shift();
    	return [
         ...newState,
         action.payload
    	]
    case C.REMOVE_FAV :
      return state.filter((message, i) => i !== action.payload)
  	default: 
  		return state
  }
}

export const newUrl = (state='/', action) =>
    (action.type === C.CHANGE_URL) ?
        action.payload : state

export const result = (state=[], action) =>
    (action.type === C.CHANGE_RESULT) ?
        action.payload : state

export const showNavBar = (state=true, action) => {
    console.log("SHOW_NAV_BAR...")
    return (action.type === C.SHOW_NAV_BAR) ?
        action.payload : state
}

export const queryParams = (state={}, action) => {
    switch (action.type) {
        case C.CHANGE_QUERY_PARAMS:
            console.log("CHANGE_QUERY_PARAMS")
            return action.payload
        case C.CHANGE_CURR_PAGE:
            return Object.assign({}, state, {currPage: action.payload})
        default:
            console.log("DEFAULT")
            return state
    }
}

export const generalQuery = (state=false, action) =>
    (action.type === C.GENERAL_QUERY) ?
        action.payload : state

export const fetching = (state=false, action) => {
    switch(action.type) {
        case C.FETCHING:
            return true;
        case C.CANCLE_FETCHING:
            return false;
        default:
            return state;
    }
}

export const total = (state=10, action) =>
    (action.type === C.SET_TOTAL) ?
        parseInt(action.payload) :
        state

export default combineReducers({
    favorites,
    total,
    result,
    showNavBar,
    queryParams,
    generalQuery,
    fetching,
    newUrl
})



