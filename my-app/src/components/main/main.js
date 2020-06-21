import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './main.module.scss';
import Title from './components/titleSection/title.js'
import Gallery from './components/gallerySection/gallery.js'
import Asign from './components/asignSection/asign.js'

export const GalleryContext = React.createContext(false);

class Main extends Component {
    state = {
        title: {
            title: 'Hazy Shade of spring',
            description: 'Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo.'
        },
        gallery: [
       		{url: './img/2.jpg'},
        	{title: 'ELEGANT SHOES' , material: 'BRAIDED LEATHER', url: './img/1.jpg'},
        	{url: './img/4.jpg'},
        	{title: 'ELEGANT SHOES' , material: 'BRAIDED LEATHER', url: './img/3.jpg'},
        	{title: 'ELEGANT SHOES' , material: 'BRAIDED LEATHER', url: './img/5.jpg'},
        	{url: './img/6.jpg'},
        	{title: 'ELEGANT SHOES' , material: 'BRAIDED LEATHER', url: './img/7.jpg'},
        	{url: './img/8.jpg'}
        ],
        asign: {
 			title: 'sign up to receive our updates',
            description: 'Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoqu penatibus et ultries volutpat.'
        }
    }

    render() {
        return (
            <ErrorBoundary>
            <main className={classes['main']}>
    			<Title data={this.state.title} />
                <GalleryContext.Provider value={this.state.gallery}>
    			   <Gallery/>
                </GalleryContext.Provider>
    			<Asign data = {this.state.asign}/>
			</main>
            </ErrorBoundary>
        )
    }
}

export default Main;