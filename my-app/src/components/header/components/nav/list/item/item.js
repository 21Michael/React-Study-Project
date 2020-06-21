import React from 'react';
import classes from './item.module.scss'

const Item = (props) => (
    <li className={classes['nav__item']}>{props.el}</li>
)

export default Item;