import React from 'react';
import classes from './nav.module.scss'
import List from './list/list.js'


const Navigation = props => (
    <div className={classes['nav']} >
        <h4 className={classes['title']}>{props.nav.title}</h4>
        <List list={props.nav.list}/>
    </div>
)

export default Navigation;