import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './reducers'

/*const consoleMessages = store => next => action => {

	let result
	console.groupCollapsed(`dispatching action => ${action.type}`)
	//console.log('ski days', store.getState().allSkiDays.length)
	result = next(action)
	let { queryParams } = store.getState()

	console.log(`
	
		"phoneNumber": ${queryParams.phoneNumber}
		"headThree": ${queryParams.headThree}
		"bodyFour": ${queryParams.bodyFour}
		"tailFour": ${queryParams.tailFour}
		"tailReg": ${queryParams.tailReg}
		"currPage": ${queryParams.currPage}
		"pageSize": ${queryParams.pageSize}
		"totalPages": ${queryParams.totalPages}

	`)

	console.groupEnd()

	return result

}*/

export default (initialState={}) => {
	//return applyMiddleware(thunk,consoleMessages)(createStore)(appReducer, initialState)
	return applyMiddleware(thunk)(createStore)(appReducer, initialState)
}



