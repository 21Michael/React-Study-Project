import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './main.module.scss';
import Title from './components/titleSection/title.js'
import Gallery from './components/gallerySection/gallery.js'
import Asign from './components/asignSection/asign.js'
import CategoryAll from './components/categoryAllSection/categoryAll.js'
import Error404 from './components/errorSection/error404.js'

import { Switch, Route } from 'react-router-dom'

export const GalleryContext = React.createContext(false);

class Main extends Component {
    state = {
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
            content: {
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
    render() {
        return (
            <ErrorBoundary>
            <main className={classes['main']}>
                <Switch>
                    <Route exact path='/'>  
                        <Title data = {this.state.homePage.content.title} />
                        <GalleryContext.Provider value={this.state.homePage.content.gallery}>
                           <Gallery/>
                        </GalleryContext.Provider>
                        <Asign data = {this.state.homePage.content.asign}/>
                   </Route>
                   <Route path={this.state.categoryAllPage.content.woman.path}>
                        <CategoryAll data = {this.state.categoryAllPage.content.woman}/>
                   </Route>
                    <Route path={this.state.categoryAllPage.content.men.path}>
                        <CategoryAll data = {this.state.categoryAllPage.content.men}/>
                   </Route>
                    <Route path={this.state.categoryAllPage.content.kids.path}>
                        <CategoryAll data = {this.state.categoryAllPage.content.kids}/>
                   </Route>
                    <Route path={this.state.categoryAllPage.content.comingSoon.path}>
                        <CategoryAll data = {this.state.categoryAllPage.content.comingSoon}/>
                   </Route>
                   <Route> 
                        <Error404 />
                   </Route>
                </Switch>  
            </main>
            </ErrorBoundary>
        )
    }
}

export default Main;