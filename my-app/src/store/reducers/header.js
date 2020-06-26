import { OPEN_CLOSE_FORM, CHANGE_INPUT } from '../actions/actionTypes.js'

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
        case OPEN_CLOSE_FORM:
            state.form.hidden = !state.form.hidden
            return { ...state, form: { ...state.form } }
        case CHANGE_INPUT:
            console.log('headerReducer: ' + action.value)
            state.form.value = action.value
            return { ...state, form: { ...state.form } }
        default:
            return state
    }
}