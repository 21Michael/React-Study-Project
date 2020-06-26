import { combineReducers } from 'redux'
import homeReducer from './mainPages/home.js'
import categoryAllReducer from './mainPages/categoryAll.js'
import productDetailsReducer from './mainPages/productDetails.js'

 const mainReducer = () => combineReducers({
    home: homeReducer,
    categoryAll: categoryAllReducer,
    productDetails: productDetailsReducer
})

 export default  mainReducer