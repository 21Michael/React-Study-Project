import React from 'react';
import classes from './item.module.scss'
import {NavLink} from 'react-router-dom'


const Item = props => (
    <li className={classes['gallery__item']}>
        <NavLink exact 
            to='/productDetails' 
            className={classes['item__img']} 
            style={{backgroundImage: `url(${require(`${props.el.url}`)})`}}> 
        	{props.el.title ?
        		 <div className={classes['item__shadow']+' '+classes['item__label']} >
                	<h4 className={classes['item__title']}>{props.el.title} </h4> 
                	<span className={classes['item__description']}> {props.el.material} </span>
            	 </div>
            : <div className={classes['item__shadow']}></div>}
        </NavLink>
    </li>
)

export default Item;