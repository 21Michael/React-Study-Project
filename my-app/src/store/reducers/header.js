import { OPEN_CLOSE_FORM, CHANGE_INPUT, CHANGE_COUNTER, DELETE_ITEM, PRODUCT_ADDED, CHANGE_QTY } from '../actions/actionTypes.js'

const initialState = {
    title: {
        to: '/',
        label: 'SH'
    },
    nav: [
        { to: '/categoryAll/woman', label: 'Woman' },
        { to: '/categoryAll/men', label: 'Men' },
        { to: '/categoryAll/kids', label: 'Kids' },
        { to: '/categoryAll/comingSoon', label: 'Coming Soon' }
    ],
    form: {
        hidden: true,
        value: ' ',
        type: 'text',
        placeholder: 'Search something...',
        required: true
    },
    basket: {
        to: '/basket',
        counter: 0
    }
}

export default function headerReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_QTY:
            state.basket.counter += action.value
            return { ...state, basket: { ...state.basket } }
        case PRODUCT_ADDED:
            state.basket.counter += 1
            return { ...state, basket: { ...state.basket } }
        case DELETE_ITEM:
            state.basket.counter -= action.value.qty
            return { ...state, basket: { ...state.basket } }
        case OPEN_CLOSE_FORM:
            state.form.hidden = !state.form.hidden
            return { ...state, form: { ...state.form } }
        case CHANGE_INPUT:
            //console.log('headerReducer: ' + action.value)
            state.form.value = action.value
            return { ...state, form: { ...state.form } }
        default:
            return state
    }
}