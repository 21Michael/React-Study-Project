import React from 'react';
import classes from './nav.module.scss'
import List from './list/list.js'

const Nav = () => (
    <nav className={classes['nav']}>
		<List/>
	</nav>
)

export default Nav;