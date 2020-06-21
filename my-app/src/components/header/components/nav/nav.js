import React from 'react';
import classes from './nav.module.scss'
import List from './list/list.js'

const Nav = () => (
    <nav className={classes['navigation-box__nav']}>
		<List/>
	</nav>
)

export default Nav;