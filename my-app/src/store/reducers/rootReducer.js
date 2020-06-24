import {combineReducers} from 'redux'
import headerReducer from './header.js'

export default combineReducers({
	header: headerReducer
})
