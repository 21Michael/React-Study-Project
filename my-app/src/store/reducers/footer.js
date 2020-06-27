import {CHANGE_GALLERY_TRANSFORM} from '../actions/actionTypes.js'

const initialState = {
    gallery: {
        transform: 0,
        images: [
            {img:"/images/footer/footer-1.jpg", to: '/productDetails/coats-1'},
            {img:"/images/footer/footer-2.jpg", to: '/productDetails/outwear-1'},
            {img:"/images/footer/footer-3.jpg", to: '/productDetails/tshirt-1'},
            {img:"/images/footer/footer-4.jpg", to: '/productDetails/coats-1'},
            {img:"/images/footer/footer-5.jpg", to: '/productDetails/outwear-1'},
            {img:"/images/footer/footer-6.jpg", to: '/productDetails/tshirt-1'},
            {img:"/images/footer/footer-7.jpg", to: '/productDetails/coats-1'},
            {img:"/images/footer/footer-8.jpg", to: '/productDetails/outwear-1'}
        ]
    },
    navigation: {
        navList: [{
                title: 'COLLECTION',
                list: [
                    { to: '/categoryAll/woman', label: 'Woman' },
                    { to: '/categoryAll/men', label: 'Men' },
                    { to: '/categoryAll/kids', label: 'Kids' },
                    { to: '/categoryAll/comingSoon', label: 'Coming Soon' }
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