import React, { Component } from 'react'
import './normalize.css'
import './reset.css'
import classes from './Layout.module.scss'
import Header from '../../components/header/header.js'
import Main from '../../components/main/main.js'
import Footer from '../../components/footer/footer.js'

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
            	<div className={classes['body__wrapper']}>
	            	<Header />
		            <Main />
		            <Footer />
            	</div>
			</React.Fragment>
        )
    }
}

export default Layout;