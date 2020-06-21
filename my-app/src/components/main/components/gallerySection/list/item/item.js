import React from 'react';
import classes from './item.module.scss'


const Item = props => (
    <li className={classes['gallery-square__item']}>
        <a className={classes['gallery-square__item-img']} style={{backgroundImage: `url(${require(`${props.el.url}`)})`}}> 
            <div className={classes['gallery-square__item-title']} >
            	{props.el.title ?
            		<React.Fragment>
	                	<h4>{props.el.title} </h4> 
	                	<span> {props.el.material} </span>
                	</React.Fragment>
                : ''}
            </div>
        </a>
    </li>
)

export default Item;