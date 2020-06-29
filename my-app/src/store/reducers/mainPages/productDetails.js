import { CHANGE_MAIN_IMG, CLICKED_SIZE, SUBMIT_FORM } from '../../actions/actionTypes.js'

const initialState = {
    hidden: true,
    path: '/productDetails',
    section: {
        added: false,
        id: 4,
        title: 'FLORAL PLIMSOLL',
        articleNum: 14210160762,
        price: 99.95,
        color: 'yellow-black',
        description: ` Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis.
                    Maecena malesuada elit lectus felis, malesuada ultricies.`,
        sizes: [
            { size: 38, clicked: false, id: 1 },
            { size: 39, clicked: false, id: 2 },
            { size: 40, clicked: false, id: 3 },
            { size: 41, clicked: false, id: 4 },
            { size: 42, clicked: false, id: 5 }
        ],
        mainImg: '/images/productDetailsPage/prod-detail-1.jpg',
        images: [
            "/images/productDetailsPage/prod-detail-2.jpg",
            "/images/productDetailsPage/prod-detail-3.jpg",
            "/images/productDetailsPage/prod-detail-4.jpg"
        ]
    }
}

export default function productDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_MAIN_IMG:
            let images = state.section.images
            let mainImg = state.section.mainImg

            images = images.map((el) => el === action.value ? mainImg : el)

            state.section.images = images
            state.section.mainImg = action.value

            return { ...state }
        case CLICKED_SIZE:
            let sizes = state.section.sizes

            state.section.sizes = sizes.map((el) => {
                el.id === action.value ?
                    el.clicked = true :
                    el.clicked = false
                return el
            })
            return { ...state }
        case SUBMIT_FORM:
            state.section.added = true
            return { ...state }
        default:
            return state
    }
}