import React, { Component } from 'react';
import ErrorBoundary from '../../hoc/errorBoundary/error.js'
import classes from './header.module.scss';
import Basket from './components/basket/basket.js'
import Form from './components/form/form.js'
import Nav from './components/nav/nav.js'
import Title from './components/title/title.js'

class Header extends Component {
    render() {
        return (
            <ErrorBoundary>
            <header className={classes.header}>
                <div className={classes.wrapper}>
                    <Title/>
                    <Nav/>
                    <Form/>
                    <Basket/> 
                </div>
            </header> 
            </ErrorBoundary>
        )
    }
}

export default Header;