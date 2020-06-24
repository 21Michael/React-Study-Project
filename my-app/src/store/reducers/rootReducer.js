import {combineReducers} from 'redux'
import headerReducer from './header.js'
import mainReducer from './main.js'

export default combineReducers({
	header: headerReducer,
	main: mainReducer
})
