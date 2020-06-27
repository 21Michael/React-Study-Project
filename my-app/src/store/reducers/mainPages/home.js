const initialState = {
    hidden: false,
    content: {
        title: {
            to: '/categoryAll/comingSoon',
            title: 'Hazy Shade of spring',
            description: 'Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.'
        },
        gallery: [
            { url: '/images/homePage/2.jpg' },
            { title: 'ELEGANT SHOES', material: 'BRAIDED LEATHER', url: '/images/homePage/1.jpg' },
            { url: '/images/homePage/4.jpg' },
            { title: 'ELEGANT SHOES', material: 'BRAIDED LEATHER', url: '/images/homePage/3.jpg' },
            { title: 'ELEGANT SHOES', material: 'BRAIDED LEATHER', url: '/images/homePage/5.jpg' },
            { url: '/images/homePage/6.jpg' },
            { title: 'ELEGANT SHOES', material: 'BRAIDED LEATHER', url: '/images/homePage/7.jpg' },
            { url: '/images/homePage/8.jpg' }
        ],
        asign: {
            title: 'sign up to receive our updates',
            description: 'Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoqu penatibus et ultries volutpat.'
        }
    }
}

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}