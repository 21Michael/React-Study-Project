
const initialState = {
    homePage: {
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
    },
    categoryAllPage: {
        hidden: true,
        sections: {
            'woman': {
                path: '/woman',
                images: [{
                        type: 'coats',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-4.jpg' }
                        ]
                    },
                    {
                        type: 'outwear',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-4.jpg' }
                        ]
                    },
                    {
                        type: 't-shirts',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-4.jpg' }
                        ]
                    }
                ]
            },
            'men': {
                path: '/men',
                images: [{
                        type: 'coats',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-4.jpg' }
                        ]
                    },
                    {
                        type: 'outwear',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-4.jpg' }
                        ]
                    },
                    {
                        type: 't-shirts',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-4.jpg' }
                        ]
                    }
                ]
            },
            'kids': {
                path: '/kids',
                images: [{
                        type: 'coats',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-4.jpg' }
                        ]
                    },
                    {
                        type: 'outwear',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-4.jpg' }
                        ]
                    },
                    {
                        type: 't-shirts',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-4.jpg' }
                        ]
                    }
                ]
            },
            'comingSoon': {
                path: '/comingSoon',
                images: [{
                        type: 'coats',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/coats-4.jpg' }
                        ]
                    },
                    {
                        type: 'outwear',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/outwear-4.jpg' }
                        ]
                    },
                    {
                        type: 't-shirts',
                        clothes: [
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-1.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-2.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-3.jpg' },
                            { title: 'Product Name', prize: '100.99$', img: './img/tshirt-4.jpg' }
                        ]
                    }
                ]
            }
        }
    }
}

export default function mainReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}