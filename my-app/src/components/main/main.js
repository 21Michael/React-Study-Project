import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './main.module.scss';

import Title from './components/titleSection/title.js'
import Gallery from './components/gallerySection/gallery.js'
import Asign from './components/asignSection/asign.js'
import CategoryAll from './components/categoryAllSection/categoryAll.js'
import ProductDetails from './components/productDetailsSection/productDetails.js'
import Basket from './components/basketSection/basket.js'

import Error404 from './components/errorSection/error404.js'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

class Main extends Component {
    render() {
        return (
            <ErrorBoundary>
            <main className={classes['main']}>
                <Switch>
                    <Route exact path='/'>  
                        <Title />
                        <Gallery/>
                        <Asign/>
                   </Route>
                   <Route path={this.props.categoryAllPath}>
                        <CategoryAll/>
                   </Route>
                    <Route path={this.props.productDetailsPath}>
                        <ProductDetails/>
                   </Route>
                    <Route path={this.props.basketPath}>
                        <Basket/>
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

function mapStateToProps(state) {
    return {
        categoryAllPath: state.main.categoryAll.path,
        productDetailsPath: state.main.productDetails.path,
        basketPath: state.main.basket.path
    }
}

export default connect(mapStateToProps)(Main)