const initialState = {
    hidden: false,
    path: '/basket',
    items: [{
        img: '/images/basketPage/shopping-bag-1.jpg',
        description: {
            title: 'FLORAL PLIMSOLL',
            ref: '2514 / 302'
        },
        color: 'Black',
        size:39,
        qty: 1,
        amount: 99.95
    },
    {
        img: '/images/basketPage/shopping-bag-2.jpg',
        description: {
            title: 'FLORAL PLIMSOLL',
            ref: '2514 / 302'
        },
        color: 'Red',
        size:38,
        qty: 1,
        amount: 99.95
    },
    {
        img: '/images/basketPage/shopping-bag-3.jpg',
        description: {
            title: 'FLORAL PLIMSOLL',
            ref: '2514 / 302'
        },
        color: 'Blue',
        size:41,
        qty: 2,
        amount: 99.95
    }]
}

export default function basketReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}