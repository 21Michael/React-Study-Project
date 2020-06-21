import React from 'react';
import classes from './item.module.scss'


const Item = props => (
    <li className={classes['footer-navigation__item']}>
     	<a href=''>{props.item} </a>
    </li>
)

export default Item;