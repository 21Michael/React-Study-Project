const initialState = {
    hidden: false,
    content: {
        title: {
            title: 'Hazy Shade of spring',
            description: 'Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.'
        },
        gallery: [
            { url: './img/2.jpg' },
            { title: 'ELEGANT SHOES', material: 'BRAIDED LEATHER', url: './img/1.jpg' },
            { url: './img/4.jpg' },
            { title: 'ELEGANT SHOES', material: 'BRAIDED LEATHER', url: './img/3.jpg' },
            { title: 'ELEGANT SHOES', material: 'BRAIDED LEATHER', url: './img/5.jpg' },
            { url: './img/6.jpg' },
            { title: 'ELEGANT SHOES', material: 'BRAIDED LEATHER', url: './img/7.jpg' },
            { url: './img/8.jpg' }
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