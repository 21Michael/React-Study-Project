import React from 'react';
import classes from './item.module.scss'
import {NavLink} from 'react-router-dom'

const Item = (props) => (
    <li className={classes['nav__item']}>
    	<NavLink exact to={props.navItem.to}> {props.navItem.label} </NavLink>
    </li>
)

export default Item;