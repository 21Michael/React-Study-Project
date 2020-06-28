import { CHANGE_MAIN_IMG, CLICKED_SIZE, PRODUCT_ADDED, DELETE_ITEM, CHANGE_QTY } from './actionTypes.js'

export function onClickThumbImg(value) {
    return { type: CHANGE_MAIN_IMG, value: value }
}

export function onClickSize(value) {
    return { type: CLICKED_SIZE, value: value }
}

export function onClickAddButton(value) {
    let item = {
        id: value.id,
        img: value.mainImg,
        description: {
            title: value.title,
            ref: value.articleNum
        },
        color: value.color,
        size: 38,
        qty: 1,
        amount: value.price
    }
    return { type: PRODUCT_ADDED, value: item }
}

export function onClickDelButton(value) {
    return { type: DELETE_ITEM, value: value }
}

export function onChangeQTY(value, id) {
    return { type: CHANGE_QTY, value: value, id: id }
}