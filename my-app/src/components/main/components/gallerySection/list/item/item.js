import React from 'react';
import classes from './item.module.scss'
import {NavLink} from 'react-router-dom'


const Item = props => (
    <li className={classes['item']}>
        <NavLink exact 
            to='/productDetails' 
            className={classes['img']} 
            style={{backgroundImage: `url(${props.el.url})`}}> 
        	{props.el.title ?
        		 <div className={classes['shadow']+' '+classes['label']} >
                	<h4 className={classes['title']}>{props.el.title} </h4> 
                	<span className={classes['description']}> {props.el.material} </span>
            	 </div>
            : <div className={classes['shadow']}></div>}
        </NavLink>
    </li>
)

export default Item;