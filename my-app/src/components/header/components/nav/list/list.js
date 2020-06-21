import React from 'react';
import classes from './list.module.scss'
import Item from './item/item.js'
import {NavContext} from '../../../header.js'

const List = (props) => (
	<NavContext.Consumer>
	{(context)=>
	    <ul className={classes['nav__list']}>
	    	{context.map((el, i)=> <Item el={el} key={i}/>)}
		</ul>
	}
	</NavContext.Consumer>
)

export default List;