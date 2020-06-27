import { combineReducers } from 'redux'
import homeReducer from './mainPages/home.js'
import categoryAllReducer from './mainPages/categoryAll.js'
import productDetailsReducer from './mainPages/productDetails.js'
import basketReducer from './mainPages/basket.js'

 const mainReducer = () => combineReducers({
    home: homeReducer,
    categoryAll: categoryAllReducer,
    productDetails: productDetailsReducer,
    basket: basketReducer
})

 export default  mainReducer