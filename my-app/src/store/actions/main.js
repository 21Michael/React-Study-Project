import { CHANGE_MAIN_IMG, CLICKED_SIZE, SUBMIT_FORM, DELETE_ITEM, CHANGE_QTY } from './actionTypes.js'

export function onClickThumbImg(value) {
    return { type: CHANGE_MAIN_IMG, value: value }
}

export function onClickSize(value) {
    return { type: CLICKED_SIZE, value: value }
}

export function onSubmit(product, size) {
    let item = {
        id: product.id,
        img: product.mainImg,
        description: {
            title: product.title,
            ref: product.articleNum
        },
        color: product.color,
        size:  size,
        qty: 1,
        price: product.price
    }
    return { type: SUBMIT_FORM, value: item }
}

export function onClickDelButton(item) {
    return { type: DELETE_ITEM, item:item }
}

export function onChangeQTY(qty, item) {
    return { type: CHANGE_QTY, qty: qty, item: item }
}