import {CHANGE_GALLERY_TRANSFORM} from '../actions/actionTypes.js'

const initialState = {
    gallery: {
        transform: 0,
        images: [
            "./img/footer-1.jpg",
            "./img/footer-2.jpg",
            "./img/footer-3.jpg",
            "./img/footer-4.jpg",
            "./img/footer-5.jpg",
            "./img/footer-6.jpg",
            "./img/footer-7.jpg",
            "./img/footer-8.jpg"
        ]
    },
    navigation: {
        navList: [{
                title: 'COLLECTION',
                list: [
                    { to: '/woman', label: 'Woman' },
                    { to: '/men', label: 'Men' },
                    { to: '/kids', label: 'Kids' },
                    { to: '/comingSoon', label: 'Coming Soon' }
                ]
            },
            {
                title: 'SITE',
                list: [
                    { to: '/', label: 'Terms of Service' },
                    { to: '/', label: 'Privacy Policy' },
                    { to: '/', label: 'Copyright Policy' },
                    { to: '/', label: 'Press Kit' },
                    { to: '/', label: 'Support' }
                ]
            },
            {
                title: 'SHOP',
                list: [
                    { to: '/', label: 'About us' },
                    { to: '/', label: 'Shipping Metods' },
                    { to: '/', label: 'Career' },
                    { to: '/', label: 'Contact' }
                ]
            }
        ],
        navTitle: {
            title: 'SOCIAL',
            copyright: 'Shoper is made with love in Warsaw, 2014 © All rights reserved. El Passion.'
        }
    }
}

export default function footerReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_GALLERY_TRANSFORM: 
            state.gallery.transform = action.value
            return { ...state, gallery: {...state.gallery}}
        default:
            return state
    }
}