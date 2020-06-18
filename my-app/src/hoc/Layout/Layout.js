import React, { Component } from 'react'
import Header from '../../components/header/header.js'
import './normalize.css'
import './reset.css'
import classes from './Layout.module.scss'

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
            	<div className={classes.body__wrapper}>
	            	<Header />
		            <main className={classes.main}>
		            	{this.props.children}
		            </main>
		            <footer className={classes.footer}>
		            	{this.props.children}
		            </footer>
            	</div>
			</React.Fragment>
        )
    }
}

export default Layout;