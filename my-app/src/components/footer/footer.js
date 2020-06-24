import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './footer.module.scss';
import Gallery from './components/gallery/gallery.js'
import Navigation from './components/navigation/navigation.js'

export const GalleryContext = React.createContext(false);
export const NavigationTitleContext = React.createContext(false);

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    state = {
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
                        { to: '/', label:  'Terms of Service' },
                        { to: '/', label: 'Privacy Policy' },
                        { to: '/', label: 'Copyright Policy' },
                        { to: '/', label: 'Press Kit' },
                        { to: '/', label: 'Support'}
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

    transformGallery = (size) => {
        const state = this.state;
        state.gallery.transform = size
        this.setState(state)
    }

    handlerGalleryButtons = (listWrapper, direction) => {
        //console.log(listWrapper.offsetWidth)
        const list_width = this.state.gallery.images.length * 200;
        const listWrapper_width = listWrapper.offsetWidth;

        let transform = this.state.gallery.transform;
        let widthToEnd, widthToStart;
        switch (direction) {
            case 'right':
                widthToEnd = list_width + transform - listWrapper_width;
                if (widthToEnd < 200) {
                    this.transformGallery(transform - widthToEnd);
                } else {
                    this.transformGallery(transform - 200);
                }
                break;
            case 'left':
                widthToStart = transform;
                if (widthToStart < 0) {
                    if (widthToStart > -200) {
                        this.transformGallery(transform - widthToStart);
                    } else {
                        this.transformGallery(transform + 200);
                    }
                }
                break;
            default:
                break;
        }
    }



    render() {
        return (
            <ErrorBoundary>
                <footer className={classes['footer']}>   
                    <GalleryContext.Provider value={ this.state.gallery}>       
                        <Gallery gallery = {this.state.gallery} handlerGalleryButtons={this.handlerGalleryButtons}/>
                    </GalleryContext.Provider>  
                    <NavigationTitleContext.Provider value={this.state.navigation.navTitle}> 
                        <Navigation navList = {this.state.navigation.navList} />
                    </NavigationTitleContext.Provider>
                </footer>
            </ErrorBoundary>
        )
    }
}

export default Footer;