import { CHANGE_MAIN_IMG, CLICKED_SIZE, PRODUCT_ADDED } from './actionTypes.js'

export function onClickThumbImg( value) {
    return { type: CHANGE_MAIN_IMG, value: value }
}

export function onClickSize(value){
	return {type: CLICKED_SIZE, value: value }
}

export function onClickAddButton(){
	return {type: PRODUCT_ADDED }
}