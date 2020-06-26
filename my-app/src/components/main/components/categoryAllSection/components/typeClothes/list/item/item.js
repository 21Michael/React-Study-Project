import React from 'react';
import classes from './item.module.scss'
import {NavLink} from 'react-router-dom'

const Item = (props) => (
    <li className={classes["item"]}>
    	<NavLink exact to={props.cloth.to} className={classes["img"]}>
    		<img src={require(`${props.cloth.img}`)} alt="img"/>
    		<div className={classes["info"]}>
            	<p>{props.cloth.title}</p>
            	<span>{props.cloth.prize}</span>
        	</div>
    	</NavLink>
    </li>
)

export default Item;