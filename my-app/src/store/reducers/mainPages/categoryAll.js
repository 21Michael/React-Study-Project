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
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-1.jpg',
                            to: '/productDetails/coats-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-2.jpg',
                            to: '/productDetails/coats-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-3.jpg',
                            to: '/productDetails/coats-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-4.jpg',
                            to: '/productDetails/coats-4'
                        }
                    ]
                },
                {
                    type: 'outwear',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-1.jpg',
                            to: '/productDetails/outwear-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-2.jpg',
                            to: '/productDetails/outwear-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-3.jpg',
                            to: '/productDetails/outwear-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-4.jpg',
                            to: '/productDetails/outwear-4'
                        }
                    ]
                },
                {
                    type: 't-shirts',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-1.jpg',
                            to: '/productDetails/tshirt-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-2.jpg',
                            to: '/productDetails/tshirt-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-3.jpg',
                            to: '/productDetails/tshirt-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-4.jpg',
                            to: '/productDetails/tshirt-4'
                        }
                    ]
                }
            ]
        },
        'men': {
            path: '/categoryAll/men',
            images: [{
                    type: 'coats',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-1.jpg',
                            to: '/productDetails/coats-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-2.jpg',
                            to: '/productDetails/coats-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-3.jpg',
                            to: '/productDetails/coats-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-4.jpg',
                            to: '/productDetails/coats-4'
                        }
                    ]
                },
                {
                    type: 'outwear',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-1.jpg',
                            to: '/productDetails/outwear-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-2.jpg',
                            to: '/productDetails/outwear-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-3.jpg',
                            to: '/productDetails/outwear-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-4.jpg',
                            to: '/productDetails/outwear-4'
                        }
                    ]
                },
                {
                    type: 't-shirts',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-1.jpg',
                            to: '/productDetails/tshirt-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-2.jpg',
                            to: '/productDetails/tshirt-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-3.jpg',
                            to: '/productDetails/tshirt-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-4.jpg',
                            to: '/productDetails/tshirt-4'
                        }
                    ]
                }
            ]
        },
        'kids': {
            path: '/categoryAll/kids',
            images: [{
                    type: 'coats',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-1.jpg',
                            to: '/productDetails/coats-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-2.jpg',
                            to: '/productDetails/coats-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-3.jpg',
                            to: '/productDetails/coats-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-4.jpg',
                            to: '/productDetails/coats-4'
                        }
                    ]
                },
                {
                    type: 'outwear',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-1.jpg',
                            to: '/productDetails/outwear-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-2.jpg',
                            to: '/productDetails/outwear-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-3.jpg',
                            to: '/productDetails/outwear-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-4.jpg',
                            to: '/productDetails/outwear-4'
                        }
                    ]
                },
                {
                    type: 't-shirts',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-1.jpg',
                            to: '/productDetails/tshirt-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-2.jpg',
                            to: '/productDetails/tshirt-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-3.jpg',
                            to: '/productDetails/tshirt-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-4.jpg',
                            to: '/productDetails/tshirt-4'
                        }
                    ]
                }
            ]
        },
        'comingSoon': {
            path: '/categoryAll/comingSoon',
            images: [{
                    type: 'coats',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-1.jpg',
                            to: '/productDetails/coats-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-2.jpg',
                            to: '/productDetails/coats-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-3.jpg',
                            to: '/productDetails/coats-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/coats-4.jpg',
                            to: '/productDetails/coats-4'
                        }
                    ]
                },
                {
                    type: 'outwear',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-1.jpg',
                            to: '/productDetails/outwear-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-2.jpg',
                            to: '/productDetails/outwear-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-3.jpg',
                            to: '/productDetails/outwear-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/outwear-4.jpg',
                            to: '/productDetails/outwear-4'
                        }
                    ]
                },
                {
                    type: 't-shirts',
                    clothes: [{
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-1.jpg',
                            to: '/productDetails/tshirt-1'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-2.jpg',
                            to: '/productDetails/tshirt-2'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-3.jpg',
                            to: '/productDetails/tshirt-3'
                        },
                        {
                            title: 'Product Name',
                            prize: '100.99$',
                            img: '/images/categoryAllPage/tshirt-4.jpg',
                            to: '/productDetails/tshirt-4'
                        }
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