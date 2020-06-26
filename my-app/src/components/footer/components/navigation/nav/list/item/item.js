import React from 'react';
import classes from './item.module.scss'
import {NavLink} from 'react-router-dom'


const Item = props => (
    <li className={classes['item']}>
     	<NavLink exact to={props.item.to}>{props.item.label} </NavLink>
    </li>
)

export default Item;