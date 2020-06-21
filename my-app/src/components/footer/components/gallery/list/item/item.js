import React from 'react';
import classes from './item.module.scss'


const Item = props => (
    <li className={classes['gallery-scroll__item']}>
    	<a href="">
    		<img src= {require(`${props.url}`)} alt="img"/>
    	</a>
    </li>
)

export default Item;