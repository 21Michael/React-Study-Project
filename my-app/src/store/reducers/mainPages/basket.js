import { DELETE_ITEM, CHANGE_QTY, SUBMIT_FORM } from '../../actions/actionTypes.js'

const initialState = {
    hidden: false,
    path: '/basket',
    items: []
}

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_FORM:
            if (!state.items.length) {
                state.items.push(action.value)
            } else {
                state.items.forEach((el, i) => {
                    if (el.id === action.value.id) {
                        if (el.size === action.value.size) {
                            el.qty += 1
                            el.amount =  action.value.price * el.qty
                        } else if (i === state.items.length - 1) {
                            state.items.push(action.value)
                        }
                    }
                })
            }
            return { ...state }
        case DELETE_ITEM:
            state.items = state.items.filter((el) => el.id !== action.item.id || el.size !== action.item.size)
            return { ...state }
        case CHANGE_QTY:
            state.items = state.items.map((el) => {
                if (el.id === action.item.id &&  el.size === action.item.size) {
                    el.qty = +action.qty
                    el.amount =  el.qty * action.item.price
                }
                return el
            })
            return { ...state }
        default:
            return state
    }
}