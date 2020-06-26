const initialState = {
    hidden: true,
    path: '/categoryAll',
    lookbook: {
        to: '/productDetails'
    },
    sections: {
        'woman': {
            path: '/categoryAll/woman',
            images: [{
                    type: 'coats',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-4.jpg', to: '/productDetails' }
                    ]
                },
                {
                    type: 'outwear',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-4.jpg', to: '/productDetails' }
                    ]
                },
                {
                    type: 't-shirts',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-4.jpg', to: '/productDetails' }
                    ]
                }
            ]
        },
        'men': {
            path: '/categoryAll/men',
            images: [{
                    type: 'coats',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-4.jpg', to: '/productDetails' }
                    ]
                },
                {
                    type: 'outwear',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-4.jpg', to: '/productDetails' }
                    ]
                },
                {
                    type: 't-shirts',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-4.jpg', to: '/productDetails' }
                    ]
                }
            ]
        },
        'kids': {
            path: '/categoryAll/kids',
            images: [{
                    type: 'coats',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-4.jpg', to: '/productDetails' }
                    ]
                },
                {
                    type: 'outwear',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-4.jpg', to: '/productDetails' }
                    ]
                },
                {
                    type: 't-shirts',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-4.jpg', to: '/productDetails' }
                    ]
                }
            ]
        },
        'comingSoon': {
            path: '/categoryAll/comingSoon',
            images: [{
                    type: 'coats',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/coats-4.jpg', to: '/productDetails' }
                    ]
                },
                {
                    type: 'outwear',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/outwear-4.jpg', to: '/productDetails' }
                    ]
                },
                {
                    type: 't-shirts',
                    clothes: [
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-1.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-2.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-3.jpg', to: '/productDetails' },
                        { title: 'Product Name', prize: '100.99$', img: './img/tshirt-4.jpg', to: '/productDetails' }
                    ]
                }
            ]
        }
    }
}

export default function categoryAllReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}