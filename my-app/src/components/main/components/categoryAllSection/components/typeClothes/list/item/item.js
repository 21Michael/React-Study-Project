import React from 'react';
import classes from './item.module.scss'

const Item = (props) => (
    <li className={classes["item"]}>
    	<a className={classes["item__img"]}>
    		<img src={require(`${props.cloth.img}`)} alt="img"/>
    		<div className={classes["item__info"]}>
            	<p>{props.cloth.title}</p>
            	<span>{props.cloth.prize}</span>
        	</div>
    	</a>
    </li>
)

export default Item;