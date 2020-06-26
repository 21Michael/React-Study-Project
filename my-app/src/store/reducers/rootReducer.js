import { combineReducers } from 'redux'
import headerReducer from './header.js'
import mainReducer from './main.js'
import footerReducer from './footer.js'

export default combineReducers({
    header: headerReducer,
    main: mainReducer(),
    footer: footerReducer
})