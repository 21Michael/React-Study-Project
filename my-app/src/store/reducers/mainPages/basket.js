import { DELETE_ITEM, CHANGE_QTY, PRODUCT_ADDED } from '../../actions/actionTypes.js'

const initialState = {
    hidden: false,
    path: '/basket',
    items: [
        // {
        //         id: 1,
        //         img: '/images/basketPage/shopping-bag-1.jpg',
        //         description: {
        //             title: 'FLORAL PLIMSOLL',
        //             ref: '2514 / 302'
        //         },
        //         color: 'Black',
        //         size: 39,
        //         qty: 1,
        //         amount: 99.95
        //     },
        //     {
        //         id: 2,
        //         img: '/images/basketPage/shopping-bag-2.jpg',
        //         description: {
        //             title: 'FLORAL PLIMSOLL',
        //             ref: '2514 / 302'
        //         },
        //         color: 'Red',
        //         size: 38,
        //         qty: 1,
        //         amount: 99.95
        //     },
        //     {
        //         id: 3,
        //         img: '/images/basketPage/shopping-bag-3.jpg',
        //         description: {
        //             title: 'FLORAL PLIMSOLL',
        //             ref: '2514 / 302'
        //         },
        //         color: 'Blue',
        //         size: 41,
        //         qty: 1,
        //         amount: 99.95
        //     }
    ]
}

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_ADDED:
            if (!state.items.length) {
                state.items.push(action.value)
            }
            else{
               state.items = state.items.map((el)=> {
                if(el.id === action.value.id){
                    el.qty += 1
                }
                else{
                    state.items.push(action.value)
                }
                return el
               }) 
            }

            return { ...state }
        case DELETE_ITEM:
            state.items = state.items.filter((el) => el.id !== action.value.id)
            return { ...state }
        case CHANGE_QTY:
            state.items = state.items.map((el) => {
                if (el.id === action.id) {
                    el.qty += +action.value
                }
                return el
            })
            return { ...state }
        default:
            return state
    }
}