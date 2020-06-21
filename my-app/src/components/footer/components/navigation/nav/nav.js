import React from 'react';
import classes from './nav.module.scss'
import List from './list/list.js'


const Navigation = props => (
    <div className={classes['footer-navigation__nav']} >
        <h4 className={classes['footer-navigation__title']}>{props.nav.title}</h4>
        <List list={props.nav.list}/>
    </div>
)

export default Navigation;