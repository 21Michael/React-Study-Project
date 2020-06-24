import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './footer.module.scss';
import Gallery from './components/gallery/gallery.js'
import Navigation from './components/navigation/navigation.js'
import { connect } from 'react-redux'

class Footer extends Component {
    render() {
        return (
            <ErrorBoundary>
                <footer className={classes['footer']}>   
                    <Gallery/>
                    <Navigation/>
                </footer>
            </ErrorBoundary>
        )
    }
}

export default Footer;