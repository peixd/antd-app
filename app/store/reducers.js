import { combineReducers } from 'redux'
import C from '../constants'

export const favorites = (state=[], action) => {
  switch(action.type) {
    case C.ADD_FAV :
    	return [
         ...state,
         action.payload
    	]
    case C.REMOVE_FAV :
      return state.filter((message, i) => i !== action.payload)
  	default: 
  		return state
  }
}

export const total = (state=10, action) =>
    (action.type === C.SET_TOTAL) ?
        parseInt(action.payload) :
        state

export const result = (state=[], action) =>
    (action.type === C.CHANGE_RESULT) ?
        action.payload : state

export const showNavBar = (state=true, action) =>
    (action.type === C.SHOW_NAV_BAR) ?
        action.payload : state


export default combineReducers({
  favorites,
  total,
  result,
  showNavBar
})



