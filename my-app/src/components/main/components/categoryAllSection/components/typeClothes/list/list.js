import React from 'react';
import classes from './list.module.scss'
import Item from './item/item.js'

const List = (props) => (
	<ul className={classes['list']}>
	{props.clothes.map((el, i)=> <Item key={i} cloth={el}/>)}
	</ul>        
)

export default List;