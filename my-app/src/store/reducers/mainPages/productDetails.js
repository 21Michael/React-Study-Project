import { CHANGE_MAIN_IMG, CLICKED_SIZE, PRODUCT_ADDED } from '../../actions/actionTypes.js'

const initialState = {
    hidden: true,
    path: '/productDetails',
    sections: {
        shoes: {
            added: false,
            title: 'FLORAL PLIMSOLL',
            articleNum: 14210160762,
            price: 99.95,
            description: ` Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.
                    Maecena malesuada elit lectus felis, malesuada ultricies.`,
            sizes: [
                { size: 38, clicked: false, id: 1 },
                { size: 39, clicked: false, id: 2 },
                { size: 40, clicked: false, id: 3 },
                { size: 41, clicked: false, id: 4 },
                { size: 42, clicked: false, id: 5 }
            ],
            mainImg: 'prod-detail-1.jpg',
            images: [
                "prod-detail-2.jpg",
                "prod-detail-3.jpg",
                "prod-detail-4.jpg"
            ]
        }
    }
}

export default function productDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MAIN_IMG:
            let images = state.sections.shoes.images
            let mainImg = state.sections.shoes.mainImg

            images = images.map((el) => el === action.value ? mainImg : el)

            state.sections.shoes.images = images
            state.sections.shoes.mainImg = action.value
            return { ...state, sections: { ...state.sections } }
        case CLICKED_SIZE:
            let sizes = state.sections.shoes.sizes
            sizes = sizes.map((el) => {
                el.id === action.value ?
                    el.clicked = true :
                    el.clicked = false
                return el
            })
            state.sections.shoes.sizes = sizes
            return { ...state, sections: { ...state.sections } }
        case PRODUCT_ADDED:
            state.sections.shoes.added = true
            return { ...state, sections: { ...state.sections } }
        default:
            return state
    }
}