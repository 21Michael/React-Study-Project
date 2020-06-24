import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './main.module.scss';
import Title from './components/titleSection/title.js'
import Gallery from './components/gallerySection/gallery.js'
import Asign from './components/asignSection/asign.js'
import CategoryAll from './components/categoryAllSection/categoryAll.js'
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
                   <Route path={this.props.womanPath}>
                        <CategoryAll 
                            images = {this.props.womanImages}
                            path={this.props.womanPath}
                        />
                   </Route>
                    <Route path={this.props.menPath}>
                        <CategoryAll 
                            images = {this.props.menImages}
                            path={this.props.menPath}
                        />
                   </Route>
                    <Route path={this.props.kidsPath}>
                        <CategoryAll 
                            images = {this.props.kidsImages}
                            path={this.props.kidsPath}
                        />
                   </Route>
                    <Route path={this.props.comingSoonPath}>
                        <CategoryAll 
                            images = {this.props.comingSoonImages}
                            path={this.props.comingSoonPath}
                        />
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
        womanPath: state.main.categoryAllPage.sections.woman.path,
        menPath: state.main.categoryAllPage.sections.men.path,
        kidsPath: state.main.categoryAllPage.sections.kids.path,
        comingSoonPath: state.main.categoryAllPage.sections.comingSoon.path,
        womanImages: state.main.categoryAllPage.sections.woman.images,
        menImages: state.main.categoryAllPage.sections.men.images,
        kidsImages: state.main.categoryAllPage.sections.kids.images,
        comingSoonImages: state.main.categoryAllPage.sections.comingSoon.images
    }
}

export default connect(mapStateToProps)(Main)